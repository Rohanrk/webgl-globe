var express = require('express');
var path = require('path');


var port = 3000;

var server = express();

server.use('/', express.static(path.join(__dirname, '/')));

server.listen(port, function() {
console.log("Http server is listening on port " + port);
});
