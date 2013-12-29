require([
    "tests/localStorage",
    "tests/sessionStorage",
    "tests/canvas",
    "tests/input",
    "tests/jpegxr",
    "tests/png",
    "tests/audio",
    "tests/video"
], function(
    localStorageTest,
    sessionStorageTest,
    canvasTest,
    inputTest,
    jpegxrTest,
    pngTest,
    audioTest,
    videoTest
){
    var result = [];
    /**
     * LocalStorage Test
     *
     * @type {localStorageTest}
     */
    var localStorageTestPerform = new localStorageTest();
    result.push(localStorageTestPerform.performTest());

    /**
     * SessionStorage Test
     *
     * @type {sessionStorageTest}
     */
    var sessionStorageTestPerform = new sessionStorageTest();
    result.push(sessionStorageTestPerform.performTest());

    /**
     * Canvas Test
     *
     * @type {canvasTest}
     */
    var canvasTestPerform = new canvasTest();
    result.push(canvasTestPerform.performTest());

    /**
     * Input Test
     *
     * @type {inputTest}
     */
    var inputTestPerform = new inputTest();
    result.push(inputTestPerform.performTest());

    /**
     * Jpegxr Test
     *
     * @type {jpegxrTest}
     */
    var jpegxrTestPerform = new jpegxrTest();
    result.push(jpegxrTestPerform.performTest());

    /**
     * PNG Test
     *
     * @type {pngTest}
     */
    var pngTestPerform = new pngTest();
    result.push(pngTestPerform.performTest());

    /**
     * Audio Test
     *
     * @type {audioTest}
     */
    var audioTestPerform = new audioTest();
    result.push(audioTestPerform.performTest());

    /**
     * Video Test
     *
     * @type {videoTest}
     */
    var videoTestPerform = new videoTest();
    result.push(videoTestPerform.performTest());

    $(function() {
        /**
         * Browser detect
         */
        $('.container h1 small').text(navigator.userAgent);

        /**
         * Result show
         *
         * @type {number}
         */
        var i = 1;
        result.forEach(function(entry) {
            $('table').append('<tr class="'+(entry.result ? 'success' : 'danger')+'"><td>'+(i++)+'</td><td>'+entry.name+'</td><td><button class="btn '+(entry.result ? 'btn-success' : 'btn-danger')+'">'+(entry.result ? 'Supported' : 'Not supported')+'</button></td></tr>');
        });
    });
});