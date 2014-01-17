define('tests/textTransform', function () {
    function textTransformTest () {
        this.retVal = {
            'name': 'CSS3 Text: text-transform',
            'url': 'http://dev.w3.org/csswg/css-text/#text-transform-property'

        };
        this.performTest = function () {
            this.retVal.result = ('text-transform' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return textTransformTest;
});
