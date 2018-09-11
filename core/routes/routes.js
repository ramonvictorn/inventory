exports.init = init;

const controllers = require('../controllers/controllers');

function init(app){
    app.get('/', controllers.index);
    
    app.get('/cadastro', controllers.cadastro);

    
    // app.get('/login', function(req, res) {
    //     console.log('/login acessada');
    //     //res.send('rota login acessada');
    //     res.send('index acessada');
    // })
    
    
    // var greetings = require("./core/functions/mysql");
    // console.log(greetings.consultaStart);
    
    // app.get('/cadastro', function(req, res) {
    //     console.log('/cadastrar acessada');
    //     greetings.consultaInicial(function() {res.render('cadastro', {tipos: ['pc', 'note']});});
    //     console.log('func chamada render aqui');
    //     //res.send('rota cadastrar acessada');
        
    // });
    
    // app.post('/ajax/getResponsavelUfsc', function (req, res) {
    //     responsavelUfsc.getResponsaveis(function(){res.send('rota cadastrar acessada');});
    // })
    
    
    // app.post('/ajax/getTipos', function (req, res) {
    //     res.json({tipos: ['pc', 'note']});
    // })
    
    // app.get('/consulta', function(req, res) {
    //     console.log('/consultar acessada');
    //     //res.send('rota consultar acessada');
    //     res.render('consulta');
    // });
}
