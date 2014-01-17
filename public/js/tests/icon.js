define('tests/icon', function () {
    function iconTest () {
        this.retVal = {
            'name': 'CSS3 Basic User Interface: icon',
            'url': 'http://dev.w3.org/csswg/css-ui/#icon'

        };
        this.performTest = function () {
            this.retVal.result = ('icon' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return iconTest;
});
