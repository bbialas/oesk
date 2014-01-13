define('tests/history', function () {
    function historyTest () {
        this.retVal = {
            'name': 'History',
            'url': 'http://www.w3.org/TR/html5/browsers.html#the-history-interface'
        };
        this.performTest = function () {
            this.retVal.result = !!(window.history && window.history.pushState);
            return this.retVal;
        }
    }
    return historyTest;
});
