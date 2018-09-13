exports.getTiposPatrimonios = getTiposPatrimonios;
exports.queryGetResponsaveisUfsc  = queryGetResponsaveisUfsc ;
exports.queryGetLocais=queryGetLocais;
var conexao;

var mysql= require('../../core/mysql');

function getTiposPatrimonios(req,res){
    
    
    mysql.dbInit(queryTipos,req,res);
}

function queryTipos(con,req,res){
    console.log('query iniciada aqui')
    conexao = con;
    con.query("SELECT * FROM tipo_patrimonio", function (err, result, fields) {
        if (err) {
          throw err;
          console.log('erro :', err)
      }else{
          console.log(result, 'result aqui');
        //   res.send(['pc', 'notee','ramon']);
            res.send(result);
          res.statusCode = 404;
      }
       
      });
}


function queryGetResponsaveisUfsc(req,res){
    console.log('query respo iniciada aqui ')
    conexao.query("select pessoa.nome from responsaveis left join pessoa on pessoa.id = responsaveis.id_pessoa", function (err, result, fields) {
        if (err) {
          throw err;
          console.log('erro :', err)
      }else{
          console.log(result, 'result aqui');
        //   res.send(['pc', 'notee','ramon']);
            res.send(result);
          res.statusCode = 404;
      }
       
      });

}


function queryGetLocais(req,res){
    console.log('queryGetLocais started - (modelsPost) ')
    conexao.query("select nome,descricao from locais;", function (err, result, fields) {
        if (err) {
          throw err;
          console.log('erro :', err)
      }else{
          console.log(result, 'result aqui');
        //   res.send(['pc', 'notee','ramon']);
            res.send(result);
          res.statusCode = 404;
      }
       
      });

}

