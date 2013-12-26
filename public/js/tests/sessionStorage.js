define('tests/sessionStorage', function () {
    function sessionStorageTest () {
        this.performTest = function () {
            try {
                sessionStorage.setItem('exampleKey', 'exampleValue');
                sessionStorage.removeItem('exampleKey');
                return true;
            } catch(e) {
                return false;
            }
        }
    }
    return sessionStorageTest;
});