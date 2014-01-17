define('tests/textShadow', function () {
    function textShadowTest () {
        this.retVal = {
            'name': 'CSS3 Text Decoration: text-shadow',
            'url': 'http://dev.w3.org/csswg/css-text/#text-indent-property'

        };
        this.performTest = function () {
            this.retVal.result = ('text-shadow' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return textShadowTest;
});
