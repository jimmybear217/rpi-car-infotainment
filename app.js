var express = require('express');
var app = express();
var path = require('path')
var wifi = require('./System/Wifi/wifi.js');

// api
app.get('/api', function (req, res) { res.send("API"); });
app.get('/api/wifi', function(req, res) { res.send(wifi.getList()); });

// gui
app.get('/', function (req, res) { res.sendFile(path.join(__dirname + '/GUI/index.html')); });
app.get('*', function (req, res) { var file = path.join(__dirname + "/GUI/" + req.path); res.sendFile(file); });
//app.route('*').all(function (req, res) { res.setHeader("Location", "/"); res.sendStatus(303).send("Error 404") });


var server = app.listen(3000, function () { var host = server.address().address; var port = server.address().port;

console.log('Example app listening at http://%s:%s', host, port); });