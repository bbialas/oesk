define('tests/localStorage', function () {
    function localStorageTest () {
        this.retVal = {
            'name': 'localStorage',
            'url': 'http://www.w3.org/TR/webstorage/'
        };
        this.performTest = function () {
            try {
                this.retVal.result = 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
                this.retVal.result = false;
            }
            return this.retVal;
        }
    }
    return localStorageTest;
});