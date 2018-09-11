exports.getTiposPatrimonios = getTiposPatrimonios;

var mysql= require('../../core/mysql');

function getTiposPatrimonios(req,res){
    res.send(['pc', 'notee']);
    res.statusCode = 404;
    mysql.dbInit(queryTipos);
}

function queryTipos(con){
    console.log('query iniciada aqui')
    con.query("SELECT * FROM tipo_patrimonio", function (err, result, fields) {
        if (err) {
          throw err;
          console.log('erro :', err)
      }else{
          console.log(result, 'result aqui');
      }
       
      });
}