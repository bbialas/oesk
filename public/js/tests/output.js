define('tests/output', function () {
    function outputTest () {
        this.retVal = {
            'name': 'Output'
        };
        this.performTest = function () {
            this.retVal.result = 'value' in document.createElement('output');
            return this.retVal;
        }
    }
    return outputTest;
});
