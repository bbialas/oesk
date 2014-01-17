define('tests/textIndent', function () {
    function textIndentTest () {
        this.retVal = {
            'name': 'CSS3 Text: text-indent',
            'url': 'http://dev.w3.org/csswg/css-text/#text-indent-property'

        };
        this.performTest = function () {
            this.retVal.result = ('text-indent' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return textIndentTest;
});
