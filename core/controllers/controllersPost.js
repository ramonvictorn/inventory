const models = require('../models/modelsPost');
const bodyParser = require('body-parser');
exports.getTiposPatrimonios = getTiposPatrimonios;
exports.getResponsaveisUfsc =getResponsaveisUfsc ;
exports.getGetLocais = getGetLocais


function getTiposPatrimonios(req,res){
    console.log('post em get patrimonio recebido')
    models.getTiposPatrimonios(req,res);
    
    
    
}

function getResponsaveisUfsc(req,res){
    models.queryGetResponsaveisUfsc(req,res);
}

function getGetLocais(req,res){
    models.queryGetLocais(req,res);
}