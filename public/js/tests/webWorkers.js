define('tests/webWorkers', function () {
    function webWorkersTest () {
        this.retVal = {
            'name': 'Web Workers'
        };
        this.performTest = function () {
            this.retVal.result = !!window.Worker;
            return this.retVal;
        }
    }
    return webWorkersTest;
});
