const exprees = require('express')
const router = exprees.Router()

const autenticar = (req, res, next)=>{
    //Simulação de autenticação: NUNCA usar em produção!!!
    const token = req.headers['authorization'];
    if(token === 'SEGREDO'){
        next()// usuário indentificado
    }else[
        res.status(401).send('Não autorizado !!!')
    ]
}

router.get('/', autenticar, (req,res)=>{
    res.status(200).send('Painel de adm')
})


module.exports = router
