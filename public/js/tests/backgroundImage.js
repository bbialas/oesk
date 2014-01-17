define('tests/backgroundImage', function () {
    function backgroundImageTest () {
        this.retVal = {
            'name': 'CSS Backgrounds: background-image',
            'url': 'http://dev.w3.org/csswg/css-backgrounds/#the-background-image'

        };
        this.performTest = function () {
            this.retVal.result = ('background-image' in document.body.style) ? true : false;
            return this.retVal;
        }
    }
    return backgroundImageTest;
});
