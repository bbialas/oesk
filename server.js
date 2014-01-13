var express = require('express'),
    app = express(),
    router = require('./routes/router');

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('./public'));

app.get('/', function(req, res){
    res.render('index');
});
app.get('/perform-tests', function(req, res) {
    res.render('perform-tests');
});
app.get('/stats', function(req, res) {
    res.render('stats');
});
app.get('/save-results', router.saveResults);
app.get('/get-stats', router.getStats);

var ip = process.env.APP_IP || '0.0.0.0',
    port = parseInt(process.env.APP_PORT || '8000');

app.listen(port, ip);
console.log('Server running at http://' + ip + ':' + port + '/');