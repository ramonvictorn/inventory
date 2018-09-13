
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


    getTipos(insertOption,insertInputs);
    //getResponsaveis(insertResponsaveis);
    
}

function insertInputs(){
    getResponsaveis(insertResponsaveis);
    getLocais(insertLocais);
}



function getTipos(call,callGeral){
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
        callGeral();
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
                       .attr("value",value.valor)
                       .text(value.tipo)); 
});

}


function insertResponsaveis(responsaveis){
    console.log('insert chamado');
    console.log('data : ' , responsaveis);
    $.each(responsaveis, function (index,value) {
        console.log('value res ,', responsaveis , 'index - > ' , index , ' value-> ', value , value.nome) 
        $('.responsaveisUfsc')
            .append($("<option></option>")
                       .attr("value",value.valor)
                       .text(value.nome)); 
});
}

function getResponsaveis(call){
    var req = $.ajax({
        type: "POST",
        url: "/getResponsaveisUfsc",
        success: function(data){console.log(data); tipos = data},
        dataType: "json",
        error: function(err){console.log(err)}
    })
    .done(function(data) {
        console.log('done feito' , req.status);
        call(data);
      })
    ;
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

function getLocais(call){
    console.log('getlocais started');
    var req = $.ajax({
        type: "POST",
        url: "/getLocais",
        success: function(data){console.log(data); tipos = data},
        dataType: "json",
        error: function(err){console.log(err)}
    })
    .done(function(data) {
        console.log('done feito' , req.status);
        if(call) call(data);
      })
    ;
}


function insertLocais(data){
    console.log('InsertLocais started', data);
    $.each(data, function (index,value) {
        console.log('value res ,', data , 'index - > ' , index , ' value-> ', value , value.nome) 
        $('.locais')
            .append($("<option></option>")
                       .attr("value",value.valor)
                       .text(value.nome + ' - ' + value.descricao)); 
});
}
