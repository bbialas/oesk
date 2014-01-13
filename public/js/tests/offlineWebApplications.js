define('tests/offlineWebApplications', function () {
    function offlineWebApplicationsTest () {
        this.retVal = {
            'name': 'Offline Web Applications',
            'url': 'http://www.w3.org/TR/html5/browsers.html#offline'
        };
        this.performTest = function () {
            this.retVal.result = !!window.applicationCache;
            return this.retVal;
        }
    }
    return offlineWebApplicationsTest;
});
