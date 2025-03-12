const dados = {
    produtos: [
        {nome:'Produto A', preco: 10},
        {nome:'Produto b', preco: 20},
        {nome:'Produto c', preco: 30}
    ]
}
dados.produtos.forEach(produto=>{
    console.log(`Nome do produto: ${produto.nome} e o preço é: ${produto.preco}`)
})