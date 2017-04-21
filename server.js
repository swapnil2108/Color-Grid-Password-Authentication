var express = require("express");
var app = express();
app.use(express.static("."));
var bodyparser = require("body-parser");
app.use(bodyparser.json());
var path = require("path");

app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/CSS'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/html'));
app.use(bodyparser.urlencoded({
  extended: false
}));

//mongo dependencies
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname + '/html/signup.html'));
});
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname + '/html/login.html'));
});
app.listen(3000);
console.log("Running at Port 3000");
