define('tests/widgets', function () {
    function WidgetsTest () {
        this.retVal = {
            'name': 'Widgets',
            'url': '#'
        };
        this.performTest = function () {
            this.retVal.result = typeof widget !== 'undefined';
            return this.retVal;
        }
    }
    return WidgetsTest;
});
