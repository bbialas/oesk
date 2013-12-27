define('tests/input', function () {
    function inputTest () {
        this.retVal = {
            'name': 'input[type="datetime"]'
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