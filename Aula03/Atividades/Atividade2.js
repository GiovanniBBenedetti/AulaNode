const fs = require('fs')

fs.readFile('Atividade2.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo: ', err);
        return;
    }
    try {
        const dados = JSON.parse(data);
        dados.Produtos.forEach(produto => {
            console.log(`Nome do produto: ${produto.nome} \nPreço: R$ ${produto.preco}\nDescrição: ${produto.descricao} \nCategoria: ${produto.categoria}\n-------------------------- \n \n`)
        });
    } catch (error) {
        console.error('Erro ao analisar o JSON', error)
    }



});