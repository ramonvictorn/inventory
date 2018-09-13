exports.index = index;
exports.cadastro = cadastro;
exports.consulta = consulta;
const models = require('../models/models');



function index(req,res){
    res.send('Oláaa index acessado com sucesso');
    console.log('rota / acessada')
}

function cadastro(req,res){
    models.getTiposPatrimonios(req,res);
    console.log('rota /cadastro acessada')
    
}


function consulta(req,res){
    models.getConsulta(req,res)
    console.log('rota /consulta acessada')
    
}