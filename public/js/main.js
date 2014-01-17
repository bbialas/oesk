require([
    "tests/localStorage",
    "tests/sessionStorage",
    "tests/canvas",
    "tests/input",
    "tests/jpegxr",
    "tests/png",
    "tests/audio",
    "tests/video",
    "tests/geolocation",
    "tests/svg",
    "tests/webgl",
    "tests/dragNdrop",
    "tests/history",
    "tests/XMLHttpRequest",
    "tests/XMLHttpRequestData",
    "tests/XMLHttpRequestCross",
    "tests/widgets",
    "tests/webWorkers",
    "tests/webSQLDatabase",
    "tests/webSockets",
    "tests/undo",
    "tests/serverSentEvents",
    "tests/offlineWebApplications",
    "tests/fileAPI",
    "tests/meter",
    "tests/output",
    "tests/iframeSrcdoc",
    "tests/backgroundColor",
    "tests/backgroundImage",
    "tests/borderColor",
    "tests/icon",
    "tests/boxSizing",
    "tests/resize",
    "tests/textTransform",
    "tests/textJustify",
    "tests/textIndent",
    "tests/textShadow",
    "tests/textDecoration"
], function(
    localStorageTest,
    sessionStorageTest,
    canvasTest,
    inputTest,
    jpegxrTest,
    pngTest,
    audioTest,
    videoTest,
    geolocationTest,
    svgTest,
    webglTest,
    dragNdropTest,
    historyTest,
    XMLHttpRequestTest,
    XMLHttpRequestDataTest,
    XMLHttpRequestCrossTest,
    widgetsTest,
    webWorkersTest,
    webSQLDatabaseTest,
    webSocketsTest,
    undoTest,
    serverSentEventsTest,
    offlineWebApplicationsTest,
    fileAPITest,
    meterTest,
    outputTest,
    iframeSrcdocTest,
    backgroundColorTest,
    backgroundImageTest,
    borderColorTest,
    iconTest,
    boxSizingTest,
    resizeTest,
    textTransformTest,
    textJustifyTest,
    textIndentTest,
    textShadowTest,
    textDecorationTest
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

    /**
     * Geolocation Test
     *
     * @type {geolocationTest}
     */
    var geolocationTestPerform = new geolocationTest();
    result.push(geolocationTestPerform.performTest());

    /**
     * SVG Test
     *
     * @type {svgTest}
     */
    var svgTestPerform = new svgTest();
    result.push(svgTestPerform.performTest());

    /**
     * WebGL Test
     *
     * @type {webglTest}
     */
    var webglTestPerform = new webglTest();
    result.push(webglTestPerform.performTest());


    /**
     * Drag N Drop Test
     *
     * @type {dragNdropTest}
     */
    var dragNdropTestPerform = new dragNdropTest();
    result.push(dragNdropTestPerform.performTest());

    /**
     * History Test
     *
     * @type {historyTest}
     */
    var historyTestPerform = new historyTest();
    result.push(historyTestPerform.performTest());

    /**
     * XML Http Request
     *
     * @type {XMLHttpRequest}
     */
    var XMLHttpRequestTestPerform = new XMLHttpRequestTest();
    result.push(XMLHttpRequestTestPerform.performTest());
    /**
     * XML Http Request send as form Data
     *
     * @type {XMLHttpRequestDataTest}
     */
    var XMLHttpRequestDataTestPerform = new XMLHttpRequestDataTest();
    result.push(XMLHttpRequestDataTestPerform.performTest());

    /**
     * XML Http Request Cross Domain Request
     *
     * @type {XMLHttpRequestCrossTest}
     */
    var XMLHttpRequestCrossTestPerform = new XMLHttpRequestCrossTest();
    result.push(XMLHttpRequestCrossTestPerform.performTest());
    /**
     * Widgets
     *
     * @type {widgetsTest}
     */
    var widgetsTestPerform = new widgetsTest();
    result.push(widgetsTestPerform.performTest());
    /**
     * Web Workers
     *
     * @type {webWorkersTest}
     */
    var webWorkersTestPerform = new webWorkersTest();
    result.push(webWorkersTestPerform.performTest());
    /**
     * Web SQL Database
     *
     * @type {webSQLDatabaseTest}
     */
    var webSQLDatabaseTestPerform = new webSQLDatabaseTest();
    result.push(webSQLDatabaseTestPerform.performTest());
    /**
     * Web Sockets
     *
     * @type {webSocketsTest}
     */
    var webSocketsTestPerform = new webSocketsTest();
    result.push(webSocketsTestPerform.performTest());
    /**
     * Undo
     *
     * @type {webSocketsTest}
     */
    var undoTestPerform = new undoTest();
    result.push(undoTestPerform.performTest());
    /**
     * Server Sent Events
     *
     * @type {serverSentEventsTest}
     */
    var serverSentEventsTestPerform = new serverSentEventsTest();
    result.push(serverSentEventsTestPerform.performTest());
    /**
     * Offline Web Applications
     *
     * @type {offlineWebApplicationsTest}
     */

    var offlineWebApplicationsTestPerform = new offlineWebApplicationsTest();
    result.push(offlineWebApplicationsTestPerform.performTest());
    /**
     * File API
     *
     * @type {fileAPITest}
     */
    var fileAPITestPerform = new fileAPITest();
    result.push(fileAPITestPerform.performTest());
    /**
     * Meter
     *
     * @type {meterTest}
     */
    var meterTestPerform = new meterTest();
    result.push(meterTestPerform.performTest());
    /**
     * Output
     *
     * @type {outputTest}
     */
    var outputTestPerform = new outputTest();
    result.push(outputTestPerform.performTest());
    /**
     * iframe Srcdoc
     *
     * @type {iframeSrcdocTest}
     */
    var iframeSrcdocTestPerform = new iframeSrcdocTest();
    result.push(iframeSrcdocTestPerform.performTest());

    var backgroundColorTestPerform = new backgroundColorTest();
    result.push(backgroundColorTestPerform.performTest());

    var backgroundImageTestPerform = new backgroundImageTest();
    result.push(backgroundImageTestPerform.performTest());

    var borderColorTestPerform = new borderColorTest();
    result.push(borderColorTestPerform.performTest());

    var iconTestPerform = new iconTest();
    result.push(iconTestPerform.performTest());

    var boxSizingTestPerform = new boxSizingTest();
    result.push(boxSizingTestPerform.performTest());

    var resizeTestPerform = new resizeTest();
    result.push(resizeTestPerform.performTest());

    var textTransformTestPerform = new textTransformTest();
    result.push(textTransformTestPerform.performTest());


    var textJustifyTestPerform = new textJustifyTest();
    result.push(textJustifyTestPerform.performTest());

    var textIndentTestPerform = new textIndentTest();
    result.push(textIndentTestPerform.performTest());

    var textShadowTestPerform = new textShadowTest();
    result.push(textShadowTestPerform.performTest());

    var textDecorationTestPerform = new textDecorationTest();
    result.push(textDecorationTestPerform.performTest());


    $(function() {
        if ($('.test-results').size()) {
            /**
             * Browser detect
             */
            $('.container h1 small').text(navigator.userAgent);

            /**
             * Result show
             *
             * @type {number}
             */
            var i = 1,
                resultObj = {'browser':navigator.userAgent, tests: Array()};

            result.forEach(function(entry) {
                resultObj['tests'].push({name: entry.name, result: entry.result.toString()});
                $('table').append('<tr class="'+(entry.result ? 'success' : 'danger')+'"><td>'+(i++)+'</td><td>'+entry.name+'</td><td><a href="'+entry.url+'" target="_blank" class="btn '+(entry.result ? 'btn-success' : 'btn-danger')+'">'+(entry.result ? 'Supported' : 'Not supported')+'</a></td></tr>');
            });
            $.get('/save-results', {data:JSON.stringify(resultObj)});
        }
        if ($('.test-stats').size()) {
            $.get('/get-stats', function (data) {
                var i = 1;
                for (key in data) {
                    var successTest = 0;
                    for (key2 in data[key].tests) {
                        if (data[key].tests[key2].result == 'true') {
                            successTest = successTest+1;
                        }
                    }
                    $('table').append('<tr><td>'+(i++)+'</td><td>'+data[key].browser+'</td><td>'+successTest+'/'+data[key].tests.length+'</td></tr>');
                }
            });
        }
    });
});
