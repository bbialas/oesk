define('tests/webSockets', function () {
    function webSocketsTest () {
        this.retVal = {
            'name': 'Web Sockets'
        };
        this.performTest = function () {
            this.retVal.result = !!window.WebSocket;
            return this.retVal;
        }
    }
    return webSocketsTest;
});
