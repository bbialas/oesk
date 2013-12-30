define('tests/geolocation', function () {
    function geolocationTest () {
        this.retVal = {
            'name': 'geolocation'
        };
        this.performTest = function () {
            this.retVal.result = 'geolocation' in navigator;
            return this.retVal;
        }
    }
    return geolocationTest;
});