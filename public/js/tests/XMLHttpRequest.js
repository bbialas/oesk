define('tests/XMLHttpRequest', function () {
    function XMLHttpRequestTest () {
        this.retVal = {
            'name': 'XMLHttpRequest: upload progress events',
            'url': 'http://www.w3.org/TR/XMLHttpRequest/'
        };
        this.performTest = function () {
            this.retVal.result = "upload" in new XMLHttpRequest;
            return this.retVal;
        }
    }
    return XMLHttpRequestTest;
});
