const fs = require('fs')

fs.readFile('dados.json','utf8', (err, data)=>{
    if (err){
        console.log('Erro ao ler o arquivo: ', err);
        return;
    }
    try{
        const dados = JSON.parse(data);
        console.log('Dados lidos do arquivo \n', dados);
    }catch(error){
        console.error('Erro ao analisar o JSON', error)
    }

});