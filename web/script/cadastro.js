
//bt próximo
$( "#proximo" ).on("click",prox);


//select de equipamentos
$('.tipos').change(function() {
    var selecionado = $(this).val();
     console.log(selecionado);
     selecao(selecionado);
 })
 
//


start();

function start(){ 
    $('.padraoPatrimonios').hide();
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

