define('tests/png', function () {
    function pngTest () {
        this.retVal = {
            'name': 'png'
        };
        this.performTest = function () {
            var image = new Image();
            image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==';

            this.retVal.result = image.width ? true : false;

            return this.retVal;
        }
    }
    return pngTest;
});