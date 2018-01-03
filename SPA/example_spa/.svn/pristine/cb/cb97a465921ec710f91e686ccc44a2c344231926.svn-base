define(['Class/Base'], function (Base) {
    'use strict';

    return Base.extend(
        function PlatformDetector(ops) {
            this._userPlatform = navigator.platform.toLowerCase();
            this._appVersion = navigator.appVersion;
        },
        {

            isIPad: function () {
                return this._isPlatformMatch(['ipad']);
            },

            isPC: function () {
                return this._isPlatformMatch(['win16', 'win32', 'win64', 'wince']);
            },

            isMAC: function () {
                return this._isPlatformMatch(['macintel']);
            },

            isAndroid: function () {
                return this._isPlatformMatch(['android']);
            },

            _isPlatformMatch: function (platforms) {
                var platformsString = platforms.join('|');
                var regex = new RegExp(platformsString, 'g');
                return this._userPlatform.match(regex) ? true : false;
            },

            getIosVersion: function () {
                if (this.isIPad()) {
                    var match = (this._appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                    var version = [
                        parseInt(match[1], 10),
                        parseInt(match[2], 10),
                        parseInt(match[3] || 0, 10)
                    ];
                    return parseFloat(version.join('.'));
                } else {
                    throw new Error("Cannot get IoS version because this device is not an iPad");
                }
            }

        }
    );
});
