define('tests/canvas', function () {
    function canvasTest () {
        this.retVal = {
            'name': 'canvas',
            'url': 'http://www.w3.org/TR/2dcontext/'
        };
        this.performTest = function () {
            var elem = document.createElement('canvas');
            this.retVal.result = !!(elem.getContext && elem.getContext('2d'));
            return this.retVal;
        }
    }
    return canvasTest;
});