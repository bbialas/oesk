define('tests/serverSentEvents', function () {
    function serverSentEventsTest () {
        this.retVal = {
            'name': 'Server Sent Events',
            'url': 'http://www.w3.org/TR/eventsource/'
        };
        this.performTest = function () {
            this.retVal.result = typeof EventSource !== 'undefined';
            return this.retVal;
        }
    }
    return serverSentEventsTest;
});
