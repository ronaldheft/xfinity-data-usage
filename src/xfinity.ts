import { EventEmitter } from 'events';
import { promises as fs } from 'fs';
import puppeteer from 'puppeteer-core';
import UserAgent from 'user-agents';

import { fetchCode, imapConfig } from './imap.js';

const JSON_URL = 'https://customer.xfinity.com/apis/csp/account/me/services/internet/usage?filter=internet';
const LOGIN_URL = 'https://customer.xfinity.com';
const SECURITY_CHECK_TITLE = 'Security Check';
const COOKIES_FILE = '/config/cookies.json';

export interface xfinityConfig {
    username: string;
    password: string;
    interval: number;
    pageTimeout: number;
}

interface xfinityUsageMonth {
    policyName: string;
    startDate: string;
    endDate: string;
    homeUsage: number;
    wifiUsage: number;
    totalUsage: number;
    allowableUsage: number;
    unitOfMeasure: string;
    displayUsage: boolean;
    devices: Array<{ id: string; usage: number }>;
    additionalBlocksUsed: number;
    additionalCostPerBlock: number;
    additionalUnitsPerBlock: number;
    additionalIncluded: number;
    additionalUsed: number;
    additionalPercentUsed: number;
    additionalRemaining: number;
    billableOverage: number;
    overageCharges: number;
    overageUsed: number;
    currentCreditAmount: number;
    maxCreditAmount: number;
    policy: string;
}

export interface xfinityUsage {
    courtesyUsed: number;
    courtesyRemaining: number;
    courtesyAllowed: number;
    inPaidOverage: boolean;
    displayUsage: boolean;
    usageMonths: Array<xfinityUsageMonth>;
    error?: string;
    /* eslint-disable-next-line camelcase */
    logged_in_within_limit?: boolean;
}

export class Xfinity extends EventEmitter {
    #browser?: puppeteer.Browser;
    #page?: puppeteer.Page;
    #password: string;
    #username: string;
    #pageTimeout: number;
    #userAgent: string | undefined;
    #imapConfig: imapConfig | undefined;
    #cookies: any;

    constructor({ username, password, pageTimeout }: xfinityConfig, imapConfig: imapConfig | undefined) {
        super();

        this.#username = username;
        this.#password = password;
        this.#pageTimeout = pageTimeout * 1000;
        this.#imapConfig = imapConfig;
    }

    async fetch(): Promise<xfinityUsage | void> {
        let data: xfinityUsage | undefined;
        if (!this.#userAgent) {
            this.#userAgent = this.getUserAgent();
        }
        this.#cookies = await this.getCookies();
        console.log('Fetching Data');
        try {
            data = await this.retrieveDataUsage();
            console.log('Data retrieved');
            await this.writeCookies();
        } catch (e) {
            this.#userAgent = undefined;
            throw e;
        } finally {
            await this.#browser?.close();
            this.#page = undefined;
        }

        return data;
    }

    private async retrieveDataUsage(): Promise<xfinityUsage> {
        let data: xfinityUsage;
        let retries = 3;

        data = await this.getJson();
        while (data?.error === 'unauthenticated' || data?.logged_in_within_limit === false) {
            if (retries === 0) {
                throw new Error('Unable to login');
            }
            if (retries !== 3) {
                console.info('Not logged in');
            }
            await this.authenticate();
            retries--;
            data = await this.getJson();
        }
        return data;
    }

    private async getJson(): Promise<xfinityUsage> {
        console.info(`Loading Usage ${JSON_URL}`);
        const page = await this.getPage();

        await page.goto(JSON_URL, { waitUntil: 'networkidle0' });
        const text = await page.$eval('pre', (e) => e.innerHTML);

        let jsonData;
        try {
            jsonData = JSON.parse(text.toString());
        } catch (e) {
            console.log('Bad JSON', text);
        }

        return jsonData;
    }

    private async authenticate() {
        console.info(`Loading (${LOGIN_URL})`);
        const page = await this.getPage();
        await page.goto(LOGIN_URL, { waitUntil: 'networkidle0' });
        await page.waitForSelector('#user');
        await page.type('#user', this.#username);
        await page.type('#passwd', this.#password);
        if ((await page.$('#remember_me')) !== null) {
            await page.click('#remember_me');
        }
        await Promise.all([
            page.click('#sign_in'),
            page.waitForNavigation({ waitUntil: ['networkidle2', 'load', 'domcontentloaded'] }),
        ]);

        await page.waitForSelector('title');
        const pageTitle = await page.title();
        console.log('Page Title: ', pageTitle);
        const twofa = await page.$('button[name=email_code]');
        if (twofa) {
            await this.handle2fa();
        } else if (pageTitle === SECURITY_CHECK_TITLE) {
            await this.bypassSecurityCheck();
        }
    }

    private async handle2fa() {
        console.log('Attempting to enter 2fa');
        if (this.#imapConfig === undefined) {
            throw new Error('No imap configured');
        }
        const page = await this.getPage();
        await Promise.all([
            page.click('button[name=email_code]'),
            page.waitForNavigation({ waitUntil: ['networkidle2', 'load', 'domcontentloaded'] }),
        ]);

        // Get Code
        const code = await fetchCode(this.#imapConfig).catch((e) => console.error(e));
        if (!code) return;
        console.log(`CODE: ${code}`);

        // Enter Code
        await page.type('#verificationCode', code);
        await page.click('#remember_second_factor_checkbox');
        await page.click('#sign_in');
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        // await Promise.all([page.click('#sign_in'), page.waitForNavigation({ waitUntil: 'networkidle2' })]);
    }

    private async bypassSecurityCheck() {
        console.log('Clicking "Ask me later" for security check');
        const page = await this.getPage();
        await Promise.all([page.click('.cancel'), page.waitForNavigation({ waitUntil: 'networkidle2' })]);
    }

    private async getBrowser() {
        if (this.#browser?.isConnected()) return this.#browser;

        this.#browser = await puppeteer.launch({
            executablePath: '/usr/bin/chromium',
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        });

        return this.#browser;
    }

    private async getPage() {
        if (this.#page?.isClosed() !== false) {
            const browser = await this.getBrowser();
            const page = await browser.newPage();

            if (this.#userAgent) {
                await page.setUserAgent(this.getUserAgent());
            }
            if (this.#cookies) {
                await page.setCookie(...this.#cookies);
            }
            page.setDefaultNavigationTimeout(this.#pageTimeout);
            await page.setViewport({ width: 1920, height: 1080 });

            this.#page = page;
            await page.setRequestInterception(true);
            page.on('request', this.onRequest);
        }

        return this.#page;
    }

    private getUserAgent(): string {
        return new UserAgent().toString();
    }

    private onRequest(request: puppeteer.HTTPRequest) {
        const resourceType = request.resourceType();
        switch (resourceType) {
            case 'image':
            case 'font': {
                request.abort();
                break;
            }
            default: {
                const domain = /(.*\.)?xfinity\.com.*/;
                const url = request.url();
                if (domain.test(url)) {
                    request.continue();
                } else {
                    request.abort();
                }
            }
        }
    }

    private async screenshot(filename: string): Promise<void> {
        const page = await this.getPage();
        await page.screenshot({ path: `${filename}.png` });
        // return page.screenshot({ path: `/config/screenshots/${filename}.png` });
    }

    private async writeCookies(): Promise<void> {
        const page = await this.getPage();
        const client = await page.target().createCDPSession();
        const cookies = (await client.send('Network.getAllCookies')).cookies;

        await fs.writeFile(COOKIES_FILE, JSON.stringify(cookies, null, 2));
    }

    private async getCookies() {
        try {
            const cookiesString = await fs.readFile(COOKIES_FILE, 'utf8');
            return JSON.parse(cookiesString);
        } catch (e) {
            console.log('cookies file not found.', COOKIES_FILE);
        }
    }
}
