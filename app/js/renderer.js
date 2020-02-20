const { ipcRenderer } = require('electron');//Biblioteca de comunicação do Render com o processo principal. Uma vez que o render por si só não pode abrir janelas.

let linkSobre = document.querySelector('#link-sobre');
linkSobre.addEventListener('click', function(){
    ipcRenderer.send('abrir-janela-sobre');
});
