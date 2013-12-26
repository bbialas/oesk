define('tests/localStorage', function () {
    function localStorageTest () {
        this.performTest = function () {
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
                return false;
            }
        }
    }
    return localStorageTest;
});