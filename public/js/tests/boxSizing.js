define('tests/boxSizing', function () {
    function boxSizingTest () {
        this.retVal = {
            'name': 'CSS3 Basic User Interface: box-sizing',
            'url': 'http://dev.w3.org/csswg/css-ui/#box-sizing'

        };
        this.performTest = function () {
            this.retVal.result = ('box-sizing' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return boxSizingTest;
});
