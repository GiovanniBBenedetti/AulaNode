const fs = require('fs');

const dados = {
    nome: 'Giovanni',
    idade: 17,
    cidade: 'São Bernado do Campo'
};

const jsonData = JSON.stringify(dados, null, 2);

fs.writeFile ('dados2.json', jsonData, 'utf8', (err)=>{
    if(err){
        console.error('Erro ao escrever no arquivo: ', err)
        return
    }
    console.log('Arquivo criado com sucesso!!!')
 });