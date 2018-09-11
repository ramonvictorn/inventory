const models = require('../models/modelsPost');
const bodyParser = require('body-parser');
exports.getTiposPatrimonios = getTiposPatrimonios;

function getTiposPatrimonios(req,res){
    console.log('post em get patrimonio recebido')
    models.getTiposPatrimonios(req,res);
    
    
    
}