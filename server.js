'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('<h1>Hello Express</h1>');
});
console.log("ALALAH!");
app.listen(3000);