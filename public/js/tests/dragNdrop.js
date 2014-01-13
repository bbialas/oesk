define('tests/dragNdrop', function () {
    function dragNdropTest () {
        this.retVal = {
            'name': 'dragNdrop',
            'url': 'http://www.w3schools.com/html/html5_draganddrop.asp'
        };
        this.performTest = function () {
            this.retVal.result = typeof EventSource !== 'undefined';

            return this.retVal;
        }
    }
    return dragNdropTest;
});
