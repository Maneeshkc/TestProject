var express = require('express'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    LdapStrategy = require('passport-ldapauth');
var jsonWebToken = require('jsonwebtoken');
var addi = require('./Addition');
console.log(addi.addition(1, 2));



var app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.get('/', function(req, res) {
    res.send('you are in the default position');
});

app.route('/GetUsers').get(function(req, res) {
    res.send('you are about to list the users');
});

app.route('/GetUserDetails').get(function(req, res) {
    res.send("you are about to list the user details");
});

app.listen(3000);
console.log('completed');