define('tests/XMLHttpRequestCross', function () {
    function XMLHttpRequestCrossTest () {
        this.retVal = {
            'name': 'XMLHttpRequest: cross-domain requests'
        };
        this.performTest = function () {
            this.retVal.result = "withCredentials" in new XMLHttpRequest;
            return this.retVal;
        }
    }
    return XMLHttpRequestCrossTest;
});
