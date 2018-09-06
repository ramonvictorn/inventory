

 
//depois do documento carregado, a func start é feita
$( document ).ready(start);


function start(){ 
    $('.padraoPatrimonios').hide();
    $( "#proximo" ).on("click",prox);

    //select de tipos de equipamentos
    $('.tipos').change(function() {
        var selecionado = $(this).val();
        console.log(selecionado);
        selecao(selecionado);
    })

    $.ajax({
        type: "POST",
        url: "/ajax/getTipos",
        success: function(data){console.log(data)},
        dataType: "json",
        error: function(err){console.log(err)}
    });
}



//chama a func dependendo do valor do select
function selecao(selecionado){
    if(selecionado != 'null'){
        renderAllPatrimonios()
    }
    if(selecionado == 'pc'){
        
    }
}

//mostras os campos padroes para todos os patrimonios
function renderAllPatrimonios(){
    $('.padraoPatrimonios').show();
}

//renderiza os campos do pc
function renderPc(){
}

//pega os values dos inputs padrao e retorna
function getValuesPadrao(){
    var object = {};
return object;}


//function para para bt proximo
function prox(){
    //varrer os inputs e armazenar em object
    console.log('bt proximo clicado');
}

