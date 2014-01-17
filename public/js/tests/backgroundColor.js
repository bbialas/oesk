define('tests/backgroundColor', function () {
    function backgroundColorTest () {
        this.retVal = {
            'name': 'CSS Backgrounds: background-color',
            'url': 'http://dev.w3.org/csswg/css-backgrounds/#the-background-color'

        };
        this.performTest = function () {
            this.retVal.result = ('background-color' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return backgroundColorTest;
});
