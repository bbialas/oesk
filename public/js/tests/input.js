define('tests/input', function () {
    function inputTest () {
        this.retVal = {
            'name': 'input[type="datetime"]',
            'url': 'http://www.w3.org/TR/html5/forms.html'
        };
        this.performTest = function () {
            var elem = document.createElement('input');
            elem.setAttribute('type', 'datetime');

            this.retVal.result = elem.type !== 'text' ? true : false;
            return this.retVal;
        }
    }
    return inputTest;
});