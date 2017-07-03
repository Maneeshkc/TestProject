var express = require('express'),
    bodyParser = require('body-parser'),
    LdapStrategy = require('passport-ldapauth');
var passport = require('passport');
var ActiveDirectoryStrategy = require('passport-activedirectory');
var jsonWebToken = require('jsonwebtoken');



var moment = require('moment');
var jwt = require('jwt-simple');
user = {
    "dn": "CN=Jason Keel,OU=Other,OU=People,DC=hrcc,DC=ad,DC=hilton,DC=com",
    "userPrincipalName": "jasonkeel@hrcc.ad.hilton.com",
    "sAMAccountName": "jasonkeel",
    "mail": "Jason.Keel@hilton.com",
    "lockoutTime": "0",
    "whenCreated": "20140123073544.0Z",
    "pwdLastSet": "131381244100497988",
    "userAccountControl": "512",
    "sn": "Keel",
    "givenName": "Jason",
    "initials": "J.K.",
    "cn": "Jason Keel",
    "displayName": "Jason Keel"
};

var token = jsonWebToken.sign(user, 'secretkey');



var path = require('path');
var userName = process.env['USERPROFILE'].split(path.sep)[2];
var loginId = path.join("domainName", userName);
console.log(userName);
//console.log('hi');
var config = require('./config.json');
//console.log(config.groups[1]);
var BreakException = {};
try {
    config.groups.forEach(function(key) {
        console.log(key);
        if (key == 'group1') {
            throw BreakException;
        }

    });
} catch (e) {
    if (e !== BreakException) throw e;
}