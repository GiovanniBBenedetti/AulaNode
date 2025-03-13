const express = require('express')
const app = express()
const port = 3000


const logger = (req, res, next) =>{
const data = new Date();
console.log(`[${data.toISOString()}]: ${req.method} ${req.url}`)
next()
}

app.use(logger);

app.get('/', (req,res)=>{
    res.status(200).send('home')
})


app.listen(port,()=>{
    console.log(`Servidor rodando na porta: http//:localhost${port}`)
})