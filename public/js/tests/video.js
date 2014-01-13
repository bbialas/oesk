define('tests/video', function () {
    function videoTest () {
        this.retVal = {
            'name': 'video',
            'url': 'http://www.w3.org/TR/html5/embedded-content-0.html#the-video-element'
        };
        this.performTest = function () {
            var elem = document.createElement('video');
            var flag = false;

            try {
                if (flag = !!elem.canPlayType) {
                    flag      = new Boolean(flag);
                    flag.ogg  = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,'');
                    flag.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');
                    flag.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
                    flag.vp9  = elem.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,'');
                }
            } catch (e) { }

            this.retVal.result = flag;
            return this.retVal;
        }
    }
    return videoTest;
});