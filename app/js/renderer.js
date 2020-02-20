const { ipcRenderer } = require('electron');//Biblioteca de comunicação do Render com o processo principal. Uma vez que o render por si só não pode abrir janelas.
const timer = require('./timer');
const data = require('../../data.js');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let tempo = document.querySelector('.tempo');
let curso = document.querySelector('.curso');

window.onload = () => {
   data.pegaDados(curso.textContent)
        .then((dados) => {
            tempo.textContent = dados.tempoEstudado;
        });
}


linkSobre.addEventListener('click', function(){
    ipcRenderer.send('abrir-janela-sobre');
});

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoPlay.addEventListener('click', function(){
    if(play)
    {
       timer.parar(curso.textContent);
        play = false;
    }
    else
    {
        timer.iniciar(tempo);
        play = true;
    }
    imgs = imgs.reverse();
    botaoPlay.src = imgs[0];
})