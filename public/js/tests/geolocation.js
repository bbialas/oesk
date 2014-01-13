define('tests/geolocation', function () {
    function geolocationTest () {
        this.retVal = {
            'name': 'geolocation',
            'url': 'http://www.w3.org/TR/geolocation-API/'
        };
        this.performTest = function () {
            this.retVal.result = 'geolocation' in navigator;
            return this.retVal;
        }
    }
    return geolocationTest;
});