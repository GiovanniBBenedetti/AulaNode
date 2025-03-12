import express from 'express'
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Pagina Inicial')
});
app.get('/produtos', (req, res)=>{
    res.send(`Lista de Produtos:`+ JSON.stringify(produtos));
})

const produtos = [
    { id: 1, nome: 'Produto A', preco: 10 },
    { id: 2, nome: 'Produto B', preco: 20 },
    { id: 3, nome: 'Produto C', preco: 30 },
    { id: 4, nome: 'Produto C', preco: 40 },
    { id: 5, nome: 'Produto D', preco: 50 }

]

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const  produto =  produtos.find(p => p.id === id);

    if (produto) {
        res.send(`Detalhes do produto com ID: ${id}` + JSON.stringify(produto));
    } else {
        res.status(404).send('Produto não foi encontrado :( ');
    }
})
app.use((req,res)=>{
    res.status(404).send('Pagína não encontrada :(')
})
app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})  