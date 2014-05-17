

var express = require('express');
var app = express();
var http = require('http');
app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/examples'));




var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('server running on port: ' + app.get('port'));
    var io = require('socket.io').listen(server);
    require('./socket')(io);
});
