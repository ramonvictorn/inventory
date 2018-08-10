var express = require('express');
var app = express();
var ejs = require('ejs'); //usar html dinamico


//seta o caminho especifico para os html's dinamicos
app.set('views', './web/view') // specify the views directory
app.set('view engine', 'html') // sets the template engine
app.engine('html',ejs.renderFile);



app.get('/', function(req, res) {
    console.log('/ acessada');
    res.send('rota / acessada');
});

app.get('/login', function(req, res) {
    console.log('/login acessada');
    //res.send('rota login acessada');
    res.render('login', {name: 'ramon'});
})

app.get('/cadastro', function(req, res) {
    console.log('/cadastrar acessada');
    //res.send('rota cadastrar acessada');
    res.render('cadastro');
});

app.get('/consulta', function(req, res) {
    console.log('/consultar acessada');
    //res.send('rota consultar acessada');
    res.render('consulta');
});





app.listen(8080);