define('tests/borderColor', function () {
    function borderColorTest () {
        this.retVal = {
            'name': 'CSS3 Backgrounds: border-color',
            'url': 'http://dev.w3.org/csswg/css-backgrounds/#the-border-color'

        };
        this.performTest = function () {
            this.retVal.result = ('border-color' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return borderColorTest;
});
