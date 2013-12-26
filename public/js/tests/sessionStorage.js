define('tests/sessionStorage', function () {
    function sessionStorageTest () {
        this.retVal = {
            'name': 'sessionStorage'
        };
        this.performTest = function () {
            try {
                sessionStorage.setItem('exampleKey', 'exampleValue');
                sessionStorage.removeItem('exampleKey');
                this.retVal.result = true;
            } catch(e) {
                this.retVal.result = false;
            }
            return this.retVal;
        }
    }
    return sessionStorageTest;
});