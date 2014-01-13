define('tests/webSQLDatabase', function () {
    function webSQLDatabaseTest () {
        this.retVal = {
            'name': 'Web SQL Database'
        };
        this.performTest = function () {
            this.retVal.result = !!window.openDatabase;
            return this.retVal;
        }
    }
    return webSQLDatabaseTest;
});
