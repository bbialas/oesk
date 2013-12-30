define('tests/svg', function () {
    function svgTest () {
        this.retVal = {
            'name': 'SVG'
        };
        this.performTest = function () {
            this.retVal.result = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
            return this.retVal;
        }
    }
    return svgTest;
});