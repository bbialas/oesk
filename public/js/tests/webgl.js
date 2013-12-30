define('tests/webgl', function () {
    function webglTest () {
        this.retVal = {
            'name': 'WebGL'
        };
        this.performTest = function () {
            this.retVal.result = 'WebGLRenderingContext' in window;
            return this.retVal;
        }
    }
    return webglTest;
});