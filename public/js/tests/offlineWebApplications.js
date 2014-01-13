define('tests/offlineWebApplications', function () {
    function offlineWebApplicationsTest () {
        this.retVal = {
            'name': 'Offline Web Applications'
        };
        this.performTest = function () {
            this.retVal.result = !!window.applicationCache;
            return this.retVal;
        }
    }
    return offlineWebApplicationsTest;
});
