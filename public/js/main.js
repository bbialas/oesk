require([
    "tests/localStorage",
    "tests/sessionStorage",
    "tests/canvas",
    "tests/input",
    "tests/jpegxr",
    "tests/png"
], function(
    localStorageTest,
    sessionStorageTest,
    canvasTest,
    inputTest,
    jpegxrTest,
    pngTest
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

    $(function() {
        result.forEach(function(entry) {
            $('table').append('<tr><td>'+entry.name+'</td><td>'+entry.result+'</td></tr>');
        });
    });
});