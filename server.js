var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, node.js World !!!!\n');
});

var ip = process.env.APP_IP || '0.0.0.0',
    port = parseInt(process.env.APP_PORT || '8000');

app.listen(port, ip);
console.log('Server running at http://' + ip + ':' + port + '/');