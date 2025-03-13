const express = require('express')
const app = express()
const rotasUsuarios = require('./rotasUsuarios')
const rotasProdutos = require('./rotasProdutos')
const rotasCadastro = require('./rotasCadastro')
const rotasAdmin = require('./rotasAdmin')
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended: true}))





const logger = (req, res, next) =>{
    const data = new Date();
    const fs = require('fs')

    
    console.log(`[${data.toISOString()}]: ${req.method} ${req.url}`)
    

const conteudo =`[${data.toISOString()}]: ${req.method} ${req.url} \n`
     fs.appendFile('arquivo.txt', conteudo,  err=>{
    if(err)throw err;
    
})
   


next()
}
    




app.use(logger);
app.use('/users',rotasUsuarios)
app.use('/products', rotasProdutos)
app.use('/register', rotasCadastro)
app.use('/admin', rotasAdmin)


app.get('/', (req, res) =>{
    res.status(200).send('Pagina Inicial')
})



// app.use((req,res)=>{
//     res.status(404).send('Pagína não encontrada')
// })

app.listen(port, () =>{
    console.log(`Servidor rodando no http://localhost:${port}`)
})