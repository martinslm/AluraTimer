const moment = require('moment');
const { ipcRenderer } = require('electron');
let segundos;
let timer;

module.exports = {
    iniciar(elemento){
        let tempo = moment.duration(elemento.textContent);
        segundos = tempo.asSeconds();
        clearInterval(timer);
        timer = setInterval(() => {
            segundos++;
            elemento.textContent = this.formatarSegundosEmHoras(segundos);
        }, 1000);
    },
    formatarSegundosEmHoras(segundos){
        return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
    },
    parar(curso){
        clearInterval(timer);
        let tempoEstudado = this.formatarSegundosEmHoras(segundos);
        ipcRenderer.send('curso-parado', curso, tempoEstudado);
    }
}