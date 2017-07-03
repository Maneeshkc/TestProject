var express = require('express'),
    bodyParser = require('body-parser'),
    LdapStrategy = require('passport-ldapauth');
var passport = require('passport');
var ActiveDirectoryStrategy = require('passport-activedirectory');
var jsonWebToken = require('jsonwebtoken');

var app = express();
app.post("/adlogin", function(req, res) {
    var url = "ldap://" + req.body.ad;
    var userPrincipalName = req.body.uid + "@" + req.body.domain;
    var passwd = req.body.passwd;

    if (passwd === "") {
        res.send("The empty password trick does not work here.");
        return;
    }

    // Bind as the user
    var adClient = ldap.createClient({ url: url });
    adClient.bind(userPrincipalName, passwd, function(err) {

        if (err != null) {
            if (err.name === "InvalidCredentialsError")
                res.send("Credential error");
            else
                res.send("Unknown error: " + JSON.stringify(err));
        } else
            res.send("Hello " + req.body.uid);
    });
});