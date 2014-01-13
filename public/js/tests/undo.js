define('tests/undo', function () {
    function undoTest () {
        this.retVal = {
            'name': 'Undo'
        };
        this.performTest = function () {
            this.retVal.result = typeof UndoManager !== 'undefined';
            return this.retVal;
        }
    }
    return undoTest;
});
