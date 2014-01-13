define('tests/XMLHttpRequest', function () {
    function XMLHttpRequestTest () {
        this.retVal = {
            'name': 'XMLHttpRequest: upload progress events'
        };
        this.performTest = function () {
            this.retVal.result = "upload" in new XMLHttpRequest;
            return this.retVal;
        }
    }
    return XMLHttpRequestTest;
});
