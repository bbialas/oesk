define('tests/meter', function () {
    function meterTest () {
        this.retVal = {
            'name': 'Meter',
            'url': 'http://www.w3.org/TR/html5/forms.html#the-meter-element'
        };
        this.performTest = function () {
            this.retVal.result = 'value' in document.createElement('meter');
            return this.retVal;
        }
    }
    return meterTest;
});
