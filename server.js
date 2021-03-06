var express = require("express");
var mongoose = require("mongoose");


var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
    res.send('test');
});

app.get('*', function(req, res) {
    res.render('index');
});

mongoose.connect('mongodb://localhost/jobfinder');

var con = mongoose.connection;

con.once('open', function() {
    console.log('connected to mongodb successfully!');
});

app.listen(3000);
