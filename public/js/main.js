require([
    "tests/localStorage",
    "tests/sessionStorage"
], function(
    localStorageTest,
    sessionStorageTest
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
});