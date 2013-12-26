require([
    "tests/localStorage",
    "tests/sessionStorage",
    "tests/canvas"
], function(
    localStorageTest,
    sessionStorageTest,
    canvasTest
){
    /**
     * LocalStorage Test
     *
     * @type {localStorageTest}
     */
    var localStorageTestPerform = new localStorageTest();
    localStorageTestPerform.performTest();

    /**
     * SessionStorage Test
     *
     * @type {sessionStorageTest}
     */
    var sessionStorageTestPerform = new sessionStorageTest();
    sessionStorageTestPerform.performTest();

    /**
     * Canvas Test
     *
     * @type {canvasTest}
     */
    var canvasTestPerform = new canvasTest();
    canvasTestPerform.performTest();
});