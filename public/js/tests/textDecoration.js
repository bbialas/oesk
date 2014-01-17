define('tests/textDecoration', function () {
    function textDecorationTest () {
        this.retVal = {
            'name': 'CSS3 Text Decoration: text-decoration-style',
            'url': 'http://dev.w3.org/csswg/css-text-decor-3/#text-decoration-style-property'

        };
        this.performTest = function () {
            this.retVal.result = ('text-decoration-style' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return textDecorationTest;
});
