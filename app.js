var express = require('express');
var app = express();
var ejs = require('ejs'); //usar html dinamico


//seta o caminho especifico para os html's dinamicos
app.set('views', './web/view') // specify the views directory
app.set('view engine', 'html') // sets the template engine
app.engine('html',ejs.renderFile);

//permitir acesso ao Js e css
app.use('/static', express.static('web/'));
//finish

app.get('/', function(req, res) {
    console.log('/ acessada');
    res.render('index');
});

app.get('/login', function(req, res) {
    console.log('/login acessada');
    //res.send('rota login acessada');
    res.render('login', {name: 'ramon'});
})


var greetings = require("./core/functions/mysql");
console.log(greetings.consultaStart);

app.get('/cadastro', function(req, res) {
    console.log('/cadastrar acessada');
    greetings.consultaInicial(function() {res.render('cadastro', {tipos: ['pc', 'note']});});
    console.log('func chamada render aqui');
    //res.send('rota cadastrar acessada');
    
});

app.post('/ajax/getTipos', function (req, res) {
    res.json({tipos: ['pc', 'note']});
})

app.get('/consulta', function(req, res) {
    console.log('/consultar acessada');
    //res.send('rota consultar acessada');
    res.render('consulta');
});





app.listen(8080);