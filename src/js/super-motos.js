const listaDasMotos = document.querySelectorAll('.moto');
const cartoesMotos = document.querySelectorAll('.cartao-moto');

listaDasMotos.forEach(moto => {
    moto.addEventListener('click', function(){
        const cartaoAberto = document.querySelector('.aberto');
        cartaoAberto.classList.remove('aberto');

        const motoSelecionada = moto.attributes.id.value;
        const idDoCartaoMotoParaAbrir = 'cartao-' + motoSelecionada;
        const cartaoMotoParaAbrir = document.getElementById(idDoCartaoMotoParaAbrir);
        cartaoMotoParaAbrir.classList.add('aberto');

        const motoAtiva = document.querySelector('.ativo');
        if(motoAtiva){
            motoAtiva.classList.remove('ativo');
        }
        moto.classList.add('ativo');        
    })
})