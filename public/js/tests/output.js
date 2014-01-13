define('tests/output', function () {
    function outputTest () {
        this.retVal = {
            'name': 'Output',
            'url': 'http://www.w3.org/TR/html5/forms.html#the-output-element'
        };
        this.performTest = function () {
            this.retVal.result = 'value' in document.createElement('output');
            return this.retVal;
        }
    }
    return outputTest;
});
