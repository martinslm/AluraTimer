const jsonfile  = require('jsonfile-promised'); 
const fs = require('fs');
module.exports = {
    criaArquivoDeCurso(nomeArquivo, conteudoArquivo){
        jsonfile.writeFile(nomeArquivo, conteudoArquivo);   
    },
    salvaDados(nomeCurso, tempoEstudado){
        let arquivoDoCurso =  __dirname + '/data/' + nomeCurso + '.json';

        if(fs.existsSync(arquivoDoCurso)){
            this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
        }else{
            this.criaArquivoDeCurso(arquivoDoCurso,{})
            this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
    }
},
    adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado){
        let dados = {
            ultimoEstudo: new Date().toString(),
            tempoEstudado: tempoEstudado
        }
        return jsonfile.writeFile(arquivoDoCurso, dados);
    },
    pegaDados(nomeCurso){
        let arquivoDoCurso = __dirname + '/data/' + nomeCurso + '.json';
        return jsonfile.readFile(arquivoDoCurso);
    }
}