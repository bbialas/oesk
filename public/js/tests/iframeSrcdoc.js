define('tests/iframeSrcdoc', function () {
    function iframeSrcdocTest () {
        this.retVal = {
            'name': 'iframe srcdoc'

        };
        this.performTest = function () {
            this.retVal.result = 'srcdoc' in document.createElement('iframe');
            return this.retVal;
        }
    }
    return iframeSrcdocTest;
});
