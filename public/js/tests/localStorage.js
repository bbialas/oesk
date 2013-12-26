define('tests/localStorage', function () {
    function localStorageTest () {
        this.retVal = {
            'name': 'localStorage'
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