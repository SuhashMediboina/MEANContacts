var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var app = express();

app.use(express.static(__dirname + "/public"));
app.get('/contactlist', function(req, res) {
   console.log("I received a GET request") ;
   db.contactlist.find(function(err, docs) {
       console.log(docs);
       res.json(docs);
   });
});

app.listen(5000);
console.log("Server running at port 5000! Hurray");