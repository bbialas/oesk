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
    "tests/time",
    "tests/iframeSrcdoc"
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
    timeTest,
    iframeSrcdocTest
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
     * Time
     *
     * @type {timeTest}
     */

    var timeTestPerform = new timeTest();
    result.push(timeTestPerform.performTest());
    /**
     * iframe Srcdoc
     *
     * @type {iframeSrcdocTest}
     */
    var iframeSrcdocTestPerform = new iframeSrcdocTest();
    result.push(iframeSrcdocTestPerform.performTest());

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
