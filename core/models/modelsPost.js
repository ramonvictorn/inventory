exports.getTiposPatrimonios = getTiposPatrimonios;

var mysql= require('../../core/mysql');

function getTiposPatrimonios(req,res){
    
    
    mysql.dbInit(queryTipos,req,res);
}

function queryTipos(con,req,res){
    console.log('query iniciada aqui')
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