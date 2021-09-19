# Changelog

## [0.16.0](https://www.github.com/ronaldheft/xfinity-data-usage/compare/v0.15.5...v0.16.0) (2021-09-19)


### Features

* Add check for confirmation element after reseting password ([a6b8ee0](https://www.github.com/ronaldheft/xfinity-data-usage/commit/a6b8ee0565358c8c715b5d211a246490375f3b31))
* Add configurable pageTimeout for puppeteer ([c019e17](https://www.github.com/ronaldheft/xfinity-data-usage/commit/c019e173db98713eb5d89f110e34e95aa22d9040))
* add dumb-init ([679d2ba](https://www.github.com/ronaldheft/xfinity-data-usage/commit/679d2ba596394b7e138325de08ac02d7c37b1719))
* Add imap option to automatically reset xfinity password ([1d347a4](https://www.github.com/ronaldheft/xfinity-data-usage/commit/1d347a4f3437be853bad17e58b5f3a49e5a3e076))
* Add incremental suffix to password when resetting ([b6009cf](https://www.github.com/ronaldheft/xfinity-data-usage/commit/b6009cf9e6b15e1db26c73dc204c079b0adaddc4))
* Add limit to retry logging in ([add3105](https://www.github.com/ronaldheft/xfinity-data-usage/commit/add3105d41e7a01ffa1e3a4866ef3e2b1569b00d))
* Add logging levels ([4bb38f7](https://www.github.com/ronaldheft/xfinity-data-usage/commit/4bb38f7c1e2572b6cf131376208d1568f58fa857))
* Add security check bypass ([12e3c49](https://www.github.com/ronaldheft/xfinity-data-usage/commit/12e3c4941f814aa3c2642909506193a99eeed0cc))
* Also release as a Home Assistant add-on ([7d9710a](https://www.github.com/ronaldheft/xfinity-data-usage/commit/7d9710a4add25dce5075e580666e5f90443596a0))
* Configurable config folder ([#46](https://www.github.com/ronaldheft/xfinity-data-usage/issues/46)) ([736e8de](https://www.github.com/ronaldheft/xfinity-data-usage/commit/736e8de2a781c8a6162b5d506f1b7dfd0b33be86))
* Maintain Xfinity account session (less password resets) ([#39](https://www.github.com/ronaldheft/xfinity-data-usage/issues/39)) ([ffaac34](https://www.github.com/ronaldheft/xfinity-data-usage/commit/ffaac348de25c28f7fffbd3a7d0f5a5924c8d437))
* Reject requests for images, fonts and domains not *xfinity.com ([a3d2091](https://www.github.com/ronaldheft/xfinity-data-usage/commit/a3d20915177c39b7a965c2dbaec45d1e5185bc6f))
* Replace geckodriver and selenium with chromium and puppeteer ([22bd274](https://www.github.com/ronaldheft/xfinity-data-usage/commit/22bd2745c35a1655ae9bcc1eead20886c617e354))
* run buster-slim as the final build image ([f0adc4a](https://www.github.com/ronaldheft/xfinity-data-usage/commit/f0adc4a4ab99f32bedbab3fa5ffd9212f1131fee))
* Spawn xfinity as a child process ([8503b44](https://www.github.com/ronaldheft/xfinity-data-usage/commit/8503b445dfbc6b1bad7d664a81cd0031561759a7))
* switch to alpine for the final build ([ce2098b](https://www.github.com/ronaldheft/xfinity-data-usage/commit/ce2098b14f8fcaf35516931567598d0b8b737fd7))


### Bug Fixes

* add launch option disable-setuid-sandbox ([0ebfd73](https://www.github.com/ronaldheft/xfinity-data-usage/commit/0ebfd73b5395b10f88f170dbd293def7dd87492f))
* catch errors throw from imap ([069e8c9](https://www.github.com/ronaldheft/xfinity-data-usage/commit/069e8c9425f65c1d7d36b4573ff8e5e45e2d454c))
* check if page is still valid ([1a2ee00](https://www.github.com/ronaldheft/xfinity-data-usage/commit/1a2ee00bd2a92afa9e1f3c0d6d75dec580dca662))
* Clear setTimeout if code is found ([3dd41b7](https://www.github.com/ronaldheft/xfinity-data-usage/commit/3dd41b7ce7ce3559b820700233b13027963c3255))
* correct firefox spelling ([6453a78](https://www.github.com/ronaldheft/xfinity-data-usage/commit/6453a780ea00596f3e47bd54c5358535a0fa6f7b))
* Don't catch imap connection errors ([4fd7535](https://www.github.com/ronaldheft/xfinity-data-usage/commit/4fd753523295bcf50658735f608fd027ddc70ab6))
* Don't wait for the username field as it could be hidden ([ab90889](https://www.github.com/ronaldheft/xfinity-data-usage/commit/ab90889985ebdba85f3364db9d97b0481981e447))
* Fix param type cast ([69d39b4](https://www.github.com/ronaldheft/xfinity-data-usage/commit/69d39b4b75d100fdfe0b842c94c378a24687aec2))
* Handle first run without password file ([2fa4fc7](https://www.github.com/ronaldheft/xfinity-data-usage/commit/2fa4fc7fbeb8173a36e4e8023261757fa76e54c2))
* improved error handling of imap flow ([1e2ae93](https://www.github.com/ronaldheft/xfinity-data-usage/commit/1e2ae93a7912f1f98baa230f4097f7466924a9ea))
* mem leak fix? ([3ef267c](https://www.github.com/ronaldheft/xfinity-data-usage/commit/3ef267ce18795af262a0588e5111f66a4f132eba))
* Possible fix for [#14](https://www.github.com/ronaldheft/xfinity-data-usage/issues/14) ([9c6fa0a](https://www.github.com/ronaldheft/xfinity-data-usage/commit/9c6fa0a85e9ab3a09f36a97bacc00b931bdc387c))
* possible fix for imapflow import ([9ea5d4d](https://www.github.com/ronaldheft/xfinity-data-usage/commit/9ea5d4d23ec1c32a8f249507377eb1a88c44403c))
* remove console.log ([6ce6cee](https://www.github.com/ronaldheft/xfinity-data-usage/commit/6ce6cee5dc64f161225fdd1a795203c1b0fdd5b0))
* Remove URL parsing ([a155ef4](https://www.github.com/ronaldheft/xfinity-data-usage/commit/a155ef4b1cb87874056383ba64be70799c0ee6b7)), closes [#30](https://www.github.com/ronaldheft/xfinity-data-usage/issues/30)
* Use correct docker link in README ([15b9cc9](https://www.github.com/ronaldheft/xfinity-data-usage/commit/15b9cc961a2a6d490ae8b42456d440c884da5a83))
* Wait for pre selector on json page ([af13d95](https://www.github.com/ronaldheft/xfinity-data-usage/commit/af13d959191831122d714088153fdd916b6a3482))
* **build:** Copy types dir for the docker build ([906100b](https://www.github.com/ronaldheft/xfinity-data-usage/commit/906100b0d54d6d78e3f9ba4750dc46fbb907971a))
* use correct package name in action ([10d0c6f](https://www.github.com/ronaldheft/xfinity-data-usage/commit/10d0c6f6df96bfadb04905d372974f97afc2a3af))
* wait for page load after security check ([3b29083](https://www.github.com/ronaldheft/xfinity-data-usage/commit/3b290831299aa815f1e2140bd9a30ea7d8c24920))
* Wait for title element to be loaded before reading it ([8c56aef](https://www.github.com/ronaldheft/xfinity-data-usage/commit/8c56aef5270cde464717d6e008ab734fa0108c6a))


### Documentation

* fix imap.auth.pass location in readme ([9475f05](https://www.github.com/ronaldheft/xfinity-data-usage/commit/9475f05aa02f73768ec5a4c184b35ce5e6e522d4))
* Update description ([ba06afd](https://www.github.com/ronaldheft/xfinity-data-usage/commit/ba06afd4202c325a5c0a862b3bef4345fcbbefe6))
* Update path for imap auth ([8a9a817](https://www.github.com/ronaldheft/xfinity-data-usage/commit/8a9a817bc498885751dd733141186bcd4eb13072))


### Miscellaneous

* Add missing interfaces ([50e8de3](https://www.github.com/ronaldheft/xfinity-data-usage/commit/50e8de3867ed4f37e240adf40fc49a5678516e06))
* release 0.10.0 ([#18](https://www.github.com/ronaldheft/xfinity-data-usage/issues/18)) ([8590cf9](https://www.github.com/ronaldheft/xfinity-data-usage/commit/8590cf92c6fc7f412ae284cd398769db8b172fc1))
* release 0.11.0 ([#21](https://www.github.com/ronaldheft/xfinity-data-usage/issues/21)) ([1b75c40](https://www.github.com/ronaldheft/xfinity-data-usage/commit/1b75c40494a0ecd9be31277f8bda74b82c8e2a4d))
* release 0.11.1 ([#22](https://www.github.com/ronaldheft/xfinity-data-usage/issues/22)) ([04fd7d0](https://www.github.com/ronaldheft/xfinity-data-usage/commit/04fd7d055a3f2d68da372747b22a1463a3dd3790))
* release 0.11.2 ([#23](https://www.github.com/ronaldheft/xfinity-data-usage/issues/23)) ([5576ca8](https://www.github.com/ronaldheft/xfinity-data-usage/commit/5576ca8ec5a7d2cbf7ceec92e6ca0670ec62a844))
* release 0.11.3 ([#24](https://www.github.com/ronaldheft/xfinity-data-usage/issues/24)) ([db5567f](https://www.github.com/ronaldheft/xfinity-data-usage/commit/db5567f41466d846c33bf30c2e098ba95e667484))
* release 0.11.4 ([#25](https://www.github.com/ronaldheft/xfinity-data-usage/issues/25)) ([b3bc95f](https://www.github.com/ronaldheft/xfinity-data-usage/commit/b3bc95f032b2c6171b2cd557a3ed773b979f7a04))
* release 0.11.5 ([#26](https://www.github.com/ronaldheft/xfinity-data-usage/issues/26)) ([379e171](https://www.github.com/ronaldheft/xfinity-data-usage/commit/379e1714331c6cbe7c369b638d77d4b634b9725b))
* release 0.11.6 ([#27](https://www.github.com/ronaldheft/xfinity-data-usage/issues/27)) ([76abf67](https://www.github.com/ronaldheft/xfinity-data-usage/commit/76abf67a19a578921a0b2d004ee08461c96b80a9))
* release 0.12.0 ([#28](https://www.github.com/ronaldheft/xfinity-data-usage/issues/28)) ([80c38d8](https://www.github.com/ronaldheft/xfinity-data-usage/commit/80c38d8a7bf64c1925b864254aa9468887910bf1))
* release 0.12.1 ([#29](https://www.github.com/ronaldheft/xfinity-data-usage/issues/29)) ([6c9fa13](https://www.github.com/ronaldheft/xfinity-data-usage/commit/6c9fa13d1f5921b4245c4eee0b465ac2f14330b0))
* release 0.12.2 ([#31](https://www.github.com/ronaldheft/xfinity-data-usage/issues/31)) ([f8db1ea](https://www.github.com/ronaldheft/xfinity-data-usage/commit/f8db1eaf861e6e10aaf78307287732a3539b12c2))
* release 0.12.3 ([1c43228](https://www.github.com/ronaldheft/xfinity-data-usage/commit/1c43228cf4c08f4560c9644a668495e5cf0b6075))
* release 0.12.3 ([#32](https://www.github.com/ronaldheft/xfinity-data-usage/issues/32)) ([45cd4e5](https://www.github.com/ronaldheft/xfinity-data-usage/commit/45cd4e502054453e37989a8cdb40cbd9c5e4386b))
* release 0.13.0 ([#34](https://www.github.com/ronaldheft/xfinity-data-usage/issues/34)) ([7699388](https://www.github.com/ronaldheft/xfinity-data-usage/commit/76993884fd8102d82dc49b729e6f9e3e23f33086))
* release 0.13.1 ([#35](https://www.github.com/ronaldheft/xfinity-data-usage/issues/35)) ([355e502](https://www.github.com/ronaldheft/xfinity-data-usage/commit/355e50261a20bb832c6ca2e59aad296615968013))
* release 0.13.2 ([#36](https://www.github.com/ronaldheft/xfinity-data-usage/issues/36)) ([8ccd041](https://www.github.com/ronaldheft/xfinity-data-usage/commit/8ccd041385c0955e133c8a0c5d6993f016ea699c))
* release 0.14.0 ([#40](https://www.github.com/ronaldheft/xfinity-data-usage/issues/40)) ([cab6940](https://www.github.com/ronaldheft/xfinity-data-usage/commit/cab6940c9ae49da7e3784adbf1f23b251b683ec2))
* release 0.15.0 ([#41](https://www.github.com/ronaldheft/xfinity-data-usage/issues/41)) ([d52c7c6](https://www.github.com/ronaldheft/xfinity-data-usage/commit/d52c7c60c040f6e525c112c98b04ed7d66054ba1))
* release 0.15.1 ([#42](https://www.github.com/ronaldheft/xfinity-data-usage/issues/42)) ([ee5ebbb](https://www.github.com/ronaldheft/xfinity-data-usage/commit/ee5ebbb01d30a93e825913bc9429b121e96303ee))
* release 0.15.2 ([#43](https://www.github.com/ronaldheft/xfinity-data-usage/issues/43)) ([e8c8d5f](https://www.github.com/ronaldheft/xfinity-data-usage/commit/e8c8d5fb6aab3363460881d30c7f752655805add))
* release 0.15.3 ([#44](https://www.github.com/ronaldheft/xfinity-data-usage/issues/44)) ([e9f3691](https://www.github.com/ronaldheft/xfinity-data-usage/commit/e9f36910c7518e7a177391f3b7e9a294d84fad0b))
* release 0.16.0 ([#47](https://www.github.com/ronaldheft/xfinity-data-usage/issues/47)) ([6bac285](https://www.github.com/ronaldheft/xfinity-data-usage/commit/6bac28536456cb638ae71471da974a1234e5c849))
* release 0.16.1 ([#48](https://www.github.com/ronaldheft/xfinity-data-usage/issues/48)) ([833fa17](https://www.github.com/ronaldheft/xfinity-data-usage/commit/833fa170e5e53431ec86071c181eb192ae872b1c))
* release 0.4.0 ([#2](https://www.github.com/ronaldheft/xfinity-data-usage/issues/2)) ([9987875](https://www.github.com/ronaldheft/xfinity-data-usage/commit/9987875d84da55644f906a1c0f5faa4475c7f46b))
* release 0.4.1 ([#3](https://www.github.com/ronaldheft/xfinity-data-usage/issues/3)) ([a99d02a](https://www.github.com/ronaldheft/xfinity-data-usage/commit/a99d02a3b074f0f4d8212e376ca4eae3ca21f71f))
* release 0.5.0 ([#4](https://www.github.com/ronaldheft/xfinity-data-usage/issues/4)) ([76046d0](https://www.github.com/ronaldheft/xfinity-data-usage/commit/76046d03237d6aa77a32f95c3792cb3b250c9bfc))
* release 0.5.1 ([#5](https://www.github.com/ronaldheft/xfinity-data-usage/issues/5)) ([ae2ad1e](https://www.github.com/ronaldheft/xfinity-data-usage/commit/ae2ad1e14a50f3b54084e4a573a1c08b95d8947c))
* release 0.6.0 ([#7](https://www.github.com/ronaldheft/xfinity-data-usage/issues/7)) ([cd7a134](https://www.github.com/ronaldheft/xfinity-data-usage/commit/cd7a1342eb74740217b9938e6fe35bb92ef39f52))
* release 0.6.1 ([#8](https://www.github.com/ronaldheft/xfinity-data-usage/issues/8)) ([700b1a8](https://www.github.com/ronaldheft/xfinity-data-usage/commit/700b1a8795cf082832b2ed3524ae8936f8f9db0b))
* release 0.6.2 ([#9](https://www.github.com/ronaldheft/xfinity-data-usage/issues/9)) ([d9dee7c](https://www.github.com/ronaldheft/xfinity-data-usage/commit/d9dee7cee1a57435019de49cd6f7cbbc490c00bc))
* release 0.7.0 ([#10](https://www.github.com/ronaldheft/xfinity-data-usage/issues/10)) ([da0fe06](https://www.github.com/ronaldheft/xfinity-data-usage/commit/da0fe060c0a0940bdcd9d193a396b7ae18027dda))
* release 0.8.0 ([#11](https://www.github.com/ronaldheft/xfinity-data-usage/issues/11)) ([da920aa](https://www.github.com/ronaldheft/xfinity-data-usage/commit/da920aae738af977be34257520643be03150a4c5))
* release 0.9.0 ([#12](https://www.github.com/ronaldheft/xfinity-data-usage/issues/12)) ([d556a72](https://www.github.com/ronaldheft/xfinity-data-usage/commit/d556a72bc79747804e47946ca282678a82842978))
* release 0.9.1 ([#16](https://www.github.com/ronaldheft/xfinity-data-usage/issues/16)) ([07d56b0](https://www.github.com/ronaldheft/xfinity-data-usage/commit/07d56b060c24c623cc15081095a79aae32533f31))
* release 0.9.2 ([#17](https://www.github.com/ronaldheft/xfinity-data-usage/issues/17)) ([b4deae2](https://www.github.com/ronaldheft/xfinity-data-usage/commit/b4deae2f72fae926b5647603cf37e74d35a36487))
* remove a console.log ([74d2fac](https://www.github.com/ronaldheft/xfinity-data-usage/commit/74d2fac3ac2eb29656e396732e5d72cd98db8a45))
* remove some comments ([01ff0ac](https://www.github.com/ronaldheft/xfinity-data-usage/commit/01ff0aca11f3991480775ec76f2a1770a7fe85a3))
* Revent release please action changes ([326c49e](https://www.github.com/ronaldheft/xfinity-data-usage/commit/326c49e854c88d7775f89bb2a771e5c7d20a95d2))
* update dependencies ([b9b7a4c](https://www.github.com/ronaldheft/xfinity-data-usage/commit/b9b7a4c0759e751f0df43f3405ac6f9fa51bbcb3))
* Update dependencies ([7fa9d9c](https://www.github.com/ronaldheft/xfinity-data-usage/commit/7fa9d9c54c239f35284b7860f41bd98da0682e97))
* Update dependencies ([ca9822e](https://www.github.com/ronaldheft/xfinity-data-usage/commit/ca9822e69a2c35a27910ff8db2b2a98589f48f93))

### [0.16.1](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.16.0...v0.16.1) (2021-09-14)


### Bug Fixes

* Don't wait for the username field as it could be hidden ([ab90889](https://www.github.com/zachowj/xfinity-data-usage/commit/ab90889985ebdba85f3364db9d97b0481981e447))

## [0.16.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.15.3...v0.16.0) (2021-09-13)


### Features

* Configurable config folder ([#46](https://www.github.com/zachowj/xfinity-data-usage/issues/46)) ([736e8de](https://www.github.com/zachowj/xfinity-data-usage/commit/736e8de2a781c8a6162b5d506f1b7dfd0b33be86))

### [0.15.3](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.15.2...v0.15.3) (2021-09-10)


### Bug Fixes

* Wait for pre selector on json page ([af13d95](https://www.github.com/zachowj/xfinity-data-usage/commit/af13d959191831122d714088153fdd916b6a3482))

### [0.15.2](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.15.1...v0.15.2) (2021-09-09)


### Miscellaneous

* Update dependencies ([7fa9d9c](https://www.github.com/zachowj/xfinity-data-usage/commit/7fa9d9c54c239f35284b7860f41bd98da0682e97))

### [0.15.1](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.15.0...v0.15.1) (2021-09-08)


### Bug Fixes

* remove console.log ([6ce6cee](https://www.github.com/zachowj/xfinity-data-usage/commit/6ce6cee5dc64f161225fdd1a795203c1b0fdd5b0))

## [0.15.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.14.0...v0.15.0) (2021-09-08)


### Features

* Add logging levels ([4bb38f7](https://www.github.com/zachowj/xfinity-data-usage/commit/4bb38f7c1e2572b6cf131376208d1568f58fa857))


### Miscellaneous

* Revent release please action changes ([326c49e](https://www.github.com/zachowj/xfinity-data-usage/commit/326c49e854c88d7775f89bb2a771e5c7d20a95d2))

## [0.14.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.13.2...v0.14.0) (2021-09-07)


### Features

* Add check for confirmation element after reseting password ([a6b8ee0](https://www.github.com/zachowj/xfinity-data-usage/commit/a6b8ee0565358c8c715b5d211a246490375f3b31))
* Maintain Xfinity account session (less password resets) ([#39](https://www.github.com/zachowj/xfinity-data-usage/issues/39)) ([ffaac34](https://www.github.com/zachowj/xfinity-data-usage/commit/ffaac348de25c28f7fffbd3a7d0f5a5924c8d437))

### [0.13.2](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.13.1...v0.13.2) (2021-08-15)


### Miscellaneous

* remove a console.log ([74d2fac](https://www.github.com/zachowj/xfinity-data-usage/commit/74d2fac3ac2eb29656e396732e5d72cd98db8a45))

### [0.13.1](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.13.0...v0.13.1) (2021-08-15)


### Bug Fixes

* Handle first run without password file ([2fa4fc7](https://www.github.com/zachowj/xfinity-data-usage/commit/2fa4fc7fbeb8173a36e4e8023261757fa76e54c2))

## [0.13.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.12.3...v0.13.0) (2021-08-12)


### Features

* Add incremental suffix to password when resetting ([b6009cf](https://www.github.com/zachowj/xfinity-data-usage/commit/b6009cf9e6b15e1db26c73dc204c079b0adaddc4))

### [0.12.3](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.12.2...v0.12.3) (2021-07-13)


### Miscellaneous

* release 0.12.3 ([1c43228](https://www.github.com/zachowj/xfinity-data-usage/commit/1c43228cf4c08f4560c9644a668495e5cf0b6075))

### [0.12.2](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.12.1...v0.12.2) (2021-07-13)


### Bug Fixes

* Remove URL parsing ([a155ef4](https://www.github.com/zachowj/xfinity-data-usage/commit/a155ef4b1cb87874056383ba64be70799c0ee6b7)), closes [#30](https://www.github.com/zachowj/xfinity-data-usage/issues/30)

### [0.12.1](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.12.0...v0.12.1) (2021-07-09)


### Bug Fixes

* Fix param type cast ([69d39b4](https://www.github.com/zachowj/xfinity-data-usage/commit/69d39b4b75d100fdfe0b842c94c378a24687aec2))


### Miscellaneous

* Update dependencies ([ca9822e](https://www.github.com/zachowj/xfinity-data-usage/commit/ca9822e69a2c35a27910ff8db2b2a98589f48f93))

## [0.12.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.11.6...v0.12.0) (2021-07-09)


### Features

* Spawn xfinity as a child process ([8503b44](https://www.github.com/zachowj/xfinity-data-usage/commit/8503b445dfbc6b1bad7d664a81cd0031561759a7))

### [0.11.6](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.11.5...v0.11.6) (2021-07-02)


### Bug Fixes

* Clear setTimeout if code is found ([3dd41b7](https://www.github.com/zachowj/xfinity-data-usage/commit/3dd41b7ce7ce3559b820700233b13027963c3255))

### [0.11.5](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.11.4...v0.11.5) (2021-06-28)


### Bug Fixes

* catch errors throw from imap ([069e8c9](https://www.github.com/zachowj/xfinity-data-usage/commit/069e8c9425f65c1d7d36b4573ff8e5e45e2d454c))

### [0.11.4](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.11.3...v0.11.4) (2021-06-24)


### Bug Fixes

* improved error handling of imap flow ([1e2ae93](https://www.github.com/zachowj/xfinity-data-usage/commit/1e2ae93a7912f1f98baa230f4097f7466924a9ea))


### Documentation

* fix imap.auth.pass location in readme ([9475f05](https://www.github.com/zachowj/xfinity-data-usage/commit/9475f05aa02f73768ec5a4c184b35ce5e6e522d4))
* Update path for imap auth ([8a9a817](https://www.github.com/zachowj/xfinity-data-usage/commit/8a9a817bc498885751dd733141186bcd4eb13072))

### [0.11.3](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.11.2...v0.11.3) (2021-06-24)


### Bug Fixes

* possible fix for imapflow import ([9ea5d4d](https://www.github.com/zachowj/xfinity-data-usage/commit/9ea5d4d23ec1c32a8f249507377eb1a88c44403c))

### [0.11.2](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.11.1...v0.11.2) (2021-06-23)


### Bug Fixes

* **build:** Copy types dir for the docker build ([906100b](https://www.github.com/zachowj/xfinity-data-usage/commit/906100b0d54d6d78e3f9ba4750dc46fbb907971a))

### [0.11.1](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.11.0...v0.11.1) (2021-06-23)


### Bug Fixes

* Don't catch imap connection errors ([4fd7535](https://www.github.com/zachowj/xfinity-data-usage/commit/4fd753523295bcf50658735f608fd027ddc70ab6))

## [0.11.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.10.0...v0.11.0) (2021-06-23)


### Features

* Add imap option to automatically reset xfinity password ([1d347a4](https://www.github.com/zachowj/xfinity-data-usage/commit/1d347a4f3437be853bad17e58b5f3a49e5a3e076))

## [0.10.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.9.2...v0.10.0) (2021-04-30)


### Features

* Reject requests for images, fonts and domains not *xfinity.com ([a3d2091](https://www.github.com/zachowj/xfinity-data-usage/commit/a3d20915177c39b7a965c2dbaec45d1e5185bc6f))

### [0.9.2](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.9.1...v0.9.2) (2021-04-30)


### Bug Fixes

* Possible fix for [#14](https://www.github.com/zachowj/xfinity-data-usage/issues/14) ([9c6fa0a](https://www.github.com/zachowj/xfinity-data-usage/commit/9c6fa0a85e9ab3a09f36a97bacc00b931bdc387c))

### [0.9.1](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.9.0...v0.9.1) (2021-04-27)


### Bug Fixes

* Wait for title element to be loaded before reading it ([8c56aef](https://www.github.com/zachowj/xfinity-data-usage/commit/8c56aef5270cde464717d6e008ab734fa0108c6a))

## [0.9.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.8.0...v0.9.0) (2020-10-07)


### Features

* add dumb-init ([679d2ba](https://www.github.com/zachowj/xfinity-data-usage/commit/679d2ba596394b7e138325de08ac02d7c37b1719))


### Bug Fixes

* mem leak fix? ([3ef267c](https://www.github.com/zachowj/xfinity-data-usage/commit/3ef267ce18795af262a0588e5111f66a4f132eba))


### Miscellaneous

* update dependencies ([b9b7a4c](https://www.github.com/zachowj/xfinity-data-usage/commit/b9b7a4c0759e751f0df43f3405ac6f9fa51bbcb3))

## [0.8.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.7.0...v0.8.0) (2020-09-07)


### Features

* run buster-slim as the final build image ([f0adc4a](https://www.github.com/zachowj/xfinity-data-usage/commit/f0adc4a4ab99f32bedbab3fa5ffd9212f1131fee))

## [0.7.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.6.2...v0.7.0) (2020-09-07)


### Features

* switch to alpine for the final build ([ce2098b](https://www.github.com/zachowj/xfinity-data-usage/commit/ce2098b14f8fcaf35516931567598d0b8b737fd7))

### [0.6.2](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.6.1...v0.6.2) (2020-09-06)


### Bug Fixes

* check if page is still valid ([1a2ee00](https://www.github.com/zachowj/xfinity-data-usage/commit/1a2ee00bd2a92afa9e1f3c0d6d75dec580dca662))

### [0.6.1](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.6.0...v0.6.1) (2020-09-06)


### Bug Fixes

* wait for page load after security check ([3b29083](https://www.github.com/zachowj/xfinity-data-usage/commit/3b290831299aa815f1e2140bd9a30ea7d8c24920))

## [0.6.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.5.1...v0.6.0) (2020-09-06)


### Features

* Add configurable pageTimeout for puppeteer ([c019e17](https://www.github.com/zachowj/xfinity-data-usage/commit/c019e173db98713eb5d89f110e34e95aa22d9040))


### Bug Fixes

* correct firefox spelling ([6453a78](https://www.github.com/zachowj/xfinity-data-usage/commit/6453a780ea00596f3e47bd54c5358535a0fa6f7b))

### [0.5.1](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.5.0...v0.5.1) (2020-09-06)


### Bug Fixes

* add launch option disable-setuid-sandbox ([0ebfd73](https://www.github.com/zachowj/xfinity-data-usage/commit/0ebfd73b5395b10f88f170dbd293def7dd87492f))

## [0.5.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.4.1...v0.5.0) (2020-09-05)


### Features

* Replace geckodriver and selenium with chromium and puppeteer ([22bd274](https://www.github.com/zachowj/xfinity-data-usage/commit/22bd2745c35a1655ae9bcc1eead20886c617e354))

### [0.4.1](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.4.0...v0.4.1) (2020-09-02)


### Bug Fixes

* Use correct docker link in README ([15b9cc9](https://www.github.com/zachowj/xfinity-data-usage/commit/15b9cc961a2a6d490ae8b42456d440c884da5a83))
* use correct package name in action ([10d0c6f](https://www.github.com/zachowj/xfinity-data-usage/commit/10d0c6f6df96bfadb04905d372974f97afc2a3af))

## [0.4.0](https://www.github.com/zachowj/xfinity-data-usage/compare/v0.3.1...v0.4.0) (2020-09-01)


### Features

* Add limit to retry logging in ([add3105](https://www.github.com/zachowj/xfinity-data-usage/commit/add3105d41e7a01ffa1e3a4866ef3e2b1569b00d))
