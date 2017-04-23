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
app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname + '/html/index.html'));
});
app.post('/login',function(req,res){
var data = JSON.parse(Object.keys(req.body)[0]);
// console.log(data.user);
MongoClient.connect(url,function(err,db){
  if(err){
    console.log("unable to connect",err);
  }else {
    console.log("connection SUCCESS",url);
    var collection = db.collection('swapnil');
    collection.findOne({"user" : data.user},function(err,document){
      if(err){
        console.log(err);
        res.send("null")
      }else{
        console.log(document);
        res.send(document);
      }
    });
  }
  db.close();
});
});
app.post('/signup', function(req, res) {
  var data = JSON.parse(Object.keys(req.body)[0]);
  console.log(data);
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("Unabel to connect to mongo server ERROR : ", err);
    } else {
      console.log("Connection sucesful to ", url);
      var collection = db.collection('swapnil');
          collection.insert(
            data
          , function(err, result) {
            if (err) {
              console.log("ERROR ", err);
              res.send(err);
              db.close();
            } else {
              console.log("SUCCESS INSERTED in to users collection _is are ", result.length, result);
              res.send(result);
              db.close();
            }
      });
    }
    db.close();
  });
});
app.listen(3000);
console.log("Running at Port 3000");
