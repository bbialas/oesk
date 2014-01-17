define('tests/resize', function () {
    function resizeTest () {
        this.retVal = {
            'name': 'CSS3 Basic User Interface: resize',
            'url': 'http://dev.w3.org/csswg/css-ui/#resize'

        };
        this.performTest = function () {
            this.retVal.result = ('resize' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return resizeTest;
});
