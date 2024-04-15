// Boas práticas em JS manter um arquivo especifico para funções JS

//document.querySelector('.tecla_pom').onclick = tocaSomPom;
//Para guardamos a função dentro de um atributo precisamos retirar os parenteses. 



function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//for em JS
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento ){
        if(evento.code === 'Space' || evento.code ==='Enter'){    //=== em java compara valor e tipo do dado
            tecla.classList.add('ativa');
        }
    
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}