define('tests/textJustify', function () {
    function textJustifyTest () {
        this.retVal = {
            'name': 'CSS Text: text-justify',
            'url': 'http://dev.w3.org/csswg/css-text/#text-justify-property'

        };
        this.performTest = function () {
            this.retVal.result = ('text-justify' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return textJustifyTest;
});
