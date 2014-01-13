define('tests/history', function () {
    function historyTest () {
        this.retVal = {
            'name': 'History'
        };
        this.performTest = function () {
            this.retVal.result = !!(window.history && window.history.pushState);
            return this.retVal;
        }
    }
    return historyTest;
});
