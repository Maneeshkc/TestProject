var express = require("express");

//intialize express
console.log('initialize express');
var app = express();

var bookrouter = express.Router();

//create a port to listen the request
var port = 5000;
bookrouter.route('/')
    .get()
app.use(express.static('public'));
app.use(express.static('src/view'));
//route
app.get('/', function(req, res) {
    res.render('src/view/index.html');
});

app.get('/books', function(req, res) {
    res.render('src/view/index.html');
});

app.listen(port, function(err) {
    console.log('app listed a port ' + port);
});