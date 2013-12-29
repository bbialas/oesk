define('tests/audio', function () {
    function audioTest () {
        this.retVal = {
            'name': 'audio'
        };
        this.performTest = function () {
            var elem = document.createElement('audio');
            var flag = false;

            try {
                if (flag = !!elem.canPlayType) {
                    flag      = new Boolean(flag);
                    flag.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                    flag.mp3  = elem.canPlayType('audio/mpeg;').replace(/^no$/,'');
                    flag.opus = elem.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,'');
                    flag.wav  = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,'');
                    flag.m4a  = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/,'');
                }
            } catch (e) { }

            this.retVal.result = flag;
            return this.retVal;
        }
    }
    return audioTest;
});