const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const rotasUsuarios = require('./rotasUsuarios')
const rotasProdutos = require('./rotasProdutos')
const rotasCadastro = require('./rotasCadastro')
const rotasAdmin = require('./rotasAdmin')
const port = 3333

const logger = (req, res, next) =>{
    const data = new Date();
    console.log(`[${data.toISOString()}]: ${req.method} ${req.url}`)
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
    console.log(`Servidor rodando no https://localhost:${port}`)
})