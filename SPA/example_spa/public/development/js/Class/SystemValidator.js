define(['Class/Base'], function (Base) {
    'use strict';

    return Base.extend(function SystemValidator() {
        
    }, {
        /**
         * Check if browser support canvas tag
         * @return {Boolean}
         */
        canSupportCanvas: function () {
            return !!document.createElement('canvas').getContext;
        },

        /**
         * Check if browser support video tags
         * @return {Boolean}
         */
        canSupportVideo: function () {
            return (!document.createElement('video')) ? false : true;
        },

        /**
         * Check if browser can play the specified audio/video type.
         * @return {Boolean}
         */
        canSupportMp4Codec: function () {
            return this.canSupportVideo() && document.createElement('video').canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') !== "";
        },

        /**
         * @returns {boolean}
         */
        isMobileBrowser: function() {
            return (navigator.userAgent.match(/Android|Opera Mini|IEMobile|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) ? true : false;
        }
    });
});