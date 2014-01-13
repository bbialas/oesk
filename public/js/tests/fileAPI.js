define('tests/fileAPI', function () {
    function fileAPITest () {
        this.retVal = {
            'name': 'File API'
        };
        this.performTest = function () {
            this.retVal.result = typeof FileReader != 'undefined';
            return this.retVal;
        }
    }
    return fileAPITest;
});
