var express = require('express');
var app = express();

app.use(express.static('node_modules'));
app.use(express.static('app'));
app.use(express.static('css'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.listen(8080);