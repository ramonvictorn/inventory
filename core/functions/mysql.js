// var mysql = require('mysql');
var exports = module.exports = {};

// var con = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "ramon",
//     password: "#Lantec2018",
//     database: 'inventory'
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected with Mysql!");
//   });


//   var sql = "INSERT INTO tipo_patrimonio (id ,	tipo) VALUES ('1', 'Computador')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });


  //funcao que consulta as info de cadastro inicial
  exports.consultaStart = "dp Ok";


  exports.consultaInicial = function(cb){
    setTimeout(function(){ console.log('consulta inicial mysql.js feita'); cb() }, 0);
    console.log('consulta sendo feita mysql.js')
  }