define('tests/webSockets', function () {
    function webSocketsTest () {
        this.retVal = {
            'name': 'Web Sockets',
            'url': 'http://www.w3.org/TR/websockets/'
        };
        this.performTest = function () {
            this.retVal.result = !!window.WebSocket;
            return this.retVal;
        }
    }
    return webSocketsTest;
});
