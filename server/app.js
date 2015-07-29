var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));//process.env.PORT = if heroku set a port

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./public/views/index.html"));//path assembles the link to all the files we need. __dirname represents where the request came in, works like this in jquery.
});

app.listen(app.get('port'), function(){//app listen on this port
    console.log("Hey! Listening on port: " + app.get('port'));
});

