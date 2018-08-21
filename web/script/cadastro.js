var selecionado;

$('.tipos').change(function() {
    selecionado = $(this).val();
    console.log(selecionado);
    selecao();
})

function selecao(){
    if(selecionado == 'pc'){
        console.log('form pc render');
        renderPc();
    }
}

function renderPc(){
    $('.pc').show();
}