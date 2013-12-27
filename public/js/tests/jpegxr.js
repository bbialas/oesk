define('tests/jpegxr', function () {
    function jpegxrTest () {
        this.retVal = {
            'name': 'jpegxr'
        };
        this.performTest = function () {
            var image = new Image();
            image.src = 'data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA==';

            this.retVal.result = image.width ? true : false;

            return this.retVal;
        }
    }
    return jpegxrTest;
});