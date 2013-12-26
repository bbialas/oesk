define('tests/canvas', function () {
    function canvasTest () {
        this.retVal = {
            'name': 'canvas'
        };
        this.performTest = function () {
            var elem = document.createElement('canvas');
            this.retVal.result = !!(elem.getContext && elem.getContext('2d'));
            return this.retVal;
        }
    }
    return canvasTest;
});