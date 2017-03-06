var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
   console.log("I received a GET request") ;
   db.contactlist.find(function(err, docs) {
       console.log(docs);
       res.json(docs);
   });
});

app.post('/contactlist', function(req, res) {
    debugger
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc){
        res.json(doc);
    });
});

app.listen(5000);
console.log("Server running at port 5000! Hurray");