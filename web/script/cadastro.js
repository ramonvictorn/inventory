
//depois do documento carregado, a func start é feita
$( document ).ready(start);

var tipos = '';
function start(){ 
    $('.padraoPatrimonios').hide();
    $( "#proximo" ).on("click",prox);

    //select de tipos de equipamentos
    $('.tipos').change(function() {
        var selecionado = $(this).val();
        console.log(selecionado);
        selecao(selecionado);
    })

    getTipos(insertOption);
    
}

function getTipos(call){
    var req = $.ajax({
        type: "POST",
        url: "/getTiposPatrimonios",
        success: function(data){console.log(data); tipos = data},
        dataType: "json",
        error: function(err){console.log(err)}
    })
    .done(function(data) {
        console.log('done feito' , req.status);
        call();
      })
    ;
}

function insertOption(){
    console.log('callchamado');
    console.log(tipos);
   $.each(tipos, function (index,value) {
        console.log('value ,', value.tipo)
        $('.tipos')
            .append($("<option></option>")
                       .attr("value",value.tipo)
                       .text(value.tipo)); 
});

}

//chama a func dependendo do valor do select
function selecao(selecionado){
    if(selecionado != 'null'){
        renderAllPatrimonios()
    }
    
}

//mostras os campos padroes para todos os patrimonios
function renderAllPatrimonios(){
    $('.padraoPatrimonios').show();
}






//function para para bt proximo
function prox(){
    //varrer os inputs e armazenar em object
    console.log('bt proximo clicado');
}

