define('tests/XMLHttpRequestCross', function () {
    function XMLHttpRequestCrossTest () {
        this.retVal = {
            'name': 'XMLHttpRequest: cross-domain requests',
            'url': 'http://www.w3.org/TR/XMLHttpRequest/'
        };
        this.performTest = function () {
            this.retVal.result = "withCredentials" in new XMLHttpRequest;
            return this.retVal;
        }
    }
    return XMLHttpRequestCrossTest;
});
