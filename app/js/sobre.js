//Biblioteca de comunicação do Render com o processo principal. Uma vez que o render por si só não pode abrir janelas.
const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkSobre = document.querySelector('#link-fechar');
let linkGithub = document.querySelector('#link-github');
let versaoElectron = document.querySelector('#versao-electron');

window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
}

linkSobre.addEventListener('click', function(){
    ipcRenderer.send('fechar-janela-sobre');
});

linkGithub.addEventListener('click', function(){
    shell.openExternal("https://github.com/martinslm");
});

