var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27020/oesk2');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    'use strict';
    console.log('Baza ok :) Polaczono.');
});

var resultsSchema = mongoose.Schema({
    date: String,
    browser: String,
    tests: Object
});
var Results = mongoose.model('Results', resultsSchema);

exports.saveResults = function(req, res) {
    'use strict';

    var dataObj = JSON.parse(req.query.data),
        testCase = new Results(
            {date: new Date(), browser: dataObj.browser, tests: dataObj.tests}
        );

    testCase.save(function(err) {
        if (err) {
            console.log('Kod bledu: ' + err); //TODO: Trzeba obsluzyc blad
            res.send('0');
        } else {
            res.send('1');
        }
    });
};

exports.getStats = function(req, res) {
    'use strict';

    Results.find(function(err, users) {
        res.send(users);
    });
};