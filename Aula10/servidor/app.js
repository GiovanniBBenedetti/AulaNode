const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000 

let produtos = []
try{
    const data = fs.readFileSync('produtos.json', 'utf-8')
    produtos = JSON.parse(data);
}catch (error){
    console.error('Erro a ler produtos.json', error)
    produtos = [];
}

app.get('/products', (req,res)=>{
    res.json(produtos)
})
app.get('/products/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const produto = produtos.find(p => p.id===id);
    
    if(produto){
        res.json(produto)
    }else{
        res.status(404).send('Produto não encontrado')
    }

})


app.get('/' , (req , res) =>{
    res.status(200).send('Home')
})




app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})