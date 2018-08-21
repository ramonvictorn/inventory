var selecionado;

function start(){ 
    //$('.padraoPatrimonios').hide();
}
start();

$('.tipos').change(function() {
    selecionado = $(this).val();
    console.log(selecionado);
    selecao();
})

function selecao(){
    if(selecionado == 'pc'){
        console.log('form pc render');
        //renderPc();
        renderAllPatrimonios()
    }
}

function renderAllPatrimonios(){
    $('.padraoPatrimonios').css("display", "block");
}

function renderPc(){
    //$('.pc').show();
    renderAllPatrimonios()
}
