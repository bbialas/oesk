define('tests/webWorkers', function () {
    function webWorkersTest () {
        this.retVal = {
            'name': 'Web Workers',
            'url': 'http://www.w3schools.com/html/html5_webworkers.asp'
        };
        this.performTest = function () {
            this.retVal.result = !!window.Worker;
            return this.retVal;
        }
    }
    return webWorkersTest;
});
