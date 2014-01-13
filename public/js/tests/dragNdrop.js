define('tests/dragNdrop', function () {
    function dragNdropTest () {
        this.retVal = {
            'name': 'dragNdrop'
        };
        this.performTest = function () {
            this.retVal.result = typeof EventSource !== 'undefined';

            return this.retVal;
        }
    }
    return dragNdropTest;
});
