var express = require('express');
var app = express();
var path = require('path');

// router
app.get('/version', function (req, res) { res.send('v0.0.1'); });
app.get('/', function (req, res) { res.sendFile(path.join(__dirname + '/client/index.html')); });
app.get('/gui', function (req, res) { res.sendFile(path.join(__dirname + '/client/gui.html')); });
app.get('/gui/partials/header', function (req, res) { res.sendFile(path.join(__dirname + '/client/partials/header.html')); });
app.route('*').all(function (req, res) { res.setHeader("Location", "/"); res.sendStatus(303).send("Error 404") });

// server
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening at http://%s:%s', host, port);
});
