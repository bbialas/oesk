define('tests/iframeSrcdoc', function () {
    function iframeSrcdocTest () {
        this.retVal = {
            'name': 'iframe srcdoc',
            'url': 'http://www.w3.org/TR/html5/embedded-content-0.html#attr-iframe-srcdoc'

        };
        this.performTest = function () {
            this.retVal.result = 'srcdoc' in document.createElement('iframe');
            return this.retVal;
        }
    }
    return iframeSrcdocTest;
});
