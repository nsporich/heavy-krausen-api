// server.js
var PORT = process.env.PORT || 3000;
var ENV = process.env.NODE_ENV || 'development'; //this is needed for dashboard

// setup http + express + socket.io
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {'log level': 0});

// setup deployd
require('deployd').attach(server, {
    socketIo: io,  // if not provided, attach will create one for you.
    env: ENV,
    db: {host:'localhost', port:27017, name:'heavy-krausen'}
});

app.use(express.static(__dirname + '/public'));
app.use(server.handleRequest);

server.listen(PORT);
console.log('heavy-krausen-api is listening on port ' + PORT);
