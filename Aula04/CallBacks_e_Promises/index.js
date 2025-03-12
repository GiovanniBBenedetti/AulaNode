const fs = require('fs').promises;

fs.readFile('arquivo.txt','utf8')
.then(data=>{
    console.log('Conteúdo do arquivo', data);
    return data.toUpperCase();
})
.then(dataMaiusculas=>{
    console.log('Conteúdo em maiúsculas:',dataMaiusculas);
    return dataMaiusculas.toLocaleLowerCase()
})
.then(dataMinusculas=>{
    console.log('Conteúdo em minusculas:',dataMinusculas)
})
.catch(err=>{
    console.error('Erro:',err);
});