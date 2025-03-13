const exprees = require('express')
const app = exprees()
const port = 3000

const autenticar = (req, res, next)=>{
    //Simulação de autenticação: NUNCA usar em produção!!!
    const token = req.headers['authorization'];
    if(token === 'SEGREDO'){
        next()// usuário indentificado
    }else[
        res.status(401).send('Não autorizado !!!')
    ]
}

app.get('/admin', autenticar, (req,res)=>{
    res.status(200).send('Painel de adm')
})

app.get('/', (req,res)=>{
    res.status(200).send('Home')
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: http//:localhost${port}`)
})