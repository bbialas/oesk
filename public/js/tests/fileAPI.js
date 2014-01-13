define('tests/fileAPI', function () {
    function fileAPITest () {
        this.retVal = {
            'name': 'File API',
            'url': 'http://dev.w3.org/2006/webapi/FileAPI/#filereader-interface'
        };
        this.performTest = function () {
            this.retVal.result = typeof FileReader != 'undefined';
            return this.retVal;
        }
    }
    return fileAPITest;
});
