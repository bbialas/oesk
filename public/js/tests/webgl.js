define('tests/webgl', function () {
    function webglTest () {
        this.retVal = {
            'name': 'WebGL',
            'url': 'http://docs.webplatform.org/wiki/webgl'
        };
        this.performTest = function () {
            this.retVal.result = 'WebGLRenderingContext' in window;
            return this.retVal;
        }
    }
    return webglTest;
});