require([
    "tests/localStorage",
    "tests/sessionStorage",
    "tests/canvas"
], function(
    localStorageTest,
    sessionStorageTest,
    canvasTest
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

    $(function() {
        result.forEach(function(entry) {
            $('table').append('<tr><td>'+entry.name+'</td><td>'+entry.result+'</td></tr>');
        });




    });
});