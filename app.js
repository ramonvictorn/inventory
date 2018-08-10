var express = require('express');
var app = express();


app.get('/', function(req, res) {
    console.log('/ acessada');
    res.send('rota / acessada');
});

app.get('/login', function(req, res) {
    console.log('/login acessada');
    res.send('rota login acessada');
})

app.get('/cadastrar', function(req, res) {
    console.log('/cadastrar acessada');
    res.send('rota cadastrar acessada');
});

app.get('/consultar', function(req, res) {
    console.log('/consultar acessada');
    res.send('rota consultar acessada');
});



app.listen(8080);