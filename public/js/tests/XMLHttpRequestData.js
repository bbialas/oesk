define('tests/XMLHttpRequestData', function () {
    function XMLHttpRequestDataTest () {
        this.retVal = {
            'name': 'XMLHttpRequest: send as form data'
        };
        this.performTest = function () {
            this.retVal.result = !!window.FormData;
            return this.retVal;
        }
    }
    return XMLHttpRequestDataTest;
});
