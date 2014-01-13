define('tests/webSQLDatabase', function () {
    function webSQLDatabaseTest () {
        this.retVal = {
            'name': 'Web SQL Database',
            'url': 'http://www.w3.org/TR/webdatabase/'
        };
        this.performTest = function () {
            this.retVal.result = !!window.openDatabase;
            return this.retVal;
        }
    }
    return webSQLDatabaseTest;
});
