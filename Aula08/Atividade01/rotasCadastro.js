const express = require('express')
const router = express.Router()


router.post('/', (req, res) =>{
    const nome = req.body.nome
    const email = req.body.email
  
    res.status(201).send(`Usuário criado com nome:${nome} e email: ${email}`)
})

router.options('/', (req, res)=>{
    res.header('Alow', 'POST, OPTION')
    res.status(204).send()
})
module.exports = router