define('tests/canvas', function () {
    function canvasTest () {
        this.performTest = function () {
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        }
    }
    return canvasTest;
});