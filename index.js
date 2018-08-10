var express = require('express');
var app = express();


app.get('/login', function(req, res) {
    res.send('login acessado');
})

app.listen(8080);