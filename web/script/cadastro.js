var selecionado;
start();

function start(){ 
    $('.padraoPatrimonios').hide();
}


$('.tipos').change(function() {
    selecionado = $(this).val();
    console.log(selecionado);
    selecao();
})

function selecao(){
    if(selecionado != 'null'){
        renderAllPatrimonios()
    }
}

function renderAllPatrimonios(){
    $('.padraoPatrimonios').show();
}

function renderPc(){
}


function getValues(){
    var object = {};

return object;}