define('tests/meter', function () {
    function meterTest () {
        this.retVal = {
            'name': 'Meter'
        };
        this.performTest = function () {
            this.retVal.result = 'value' in document.createElement('meter');
            return this.retVal;
        }
    }
    return meterTest;
});
