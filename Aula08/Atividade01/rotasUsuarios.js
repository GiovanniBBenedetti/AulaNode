const express = require('express')
const router = express.Router()


router.get('/', (req,res)=>{
    res.status(200).send('Pagina Usuários')
})

router.get('/:id', (req,res)=>{
    const id = req.params.id
    res.status(200).send(`Produto com o id: ${id}`)
})

router.options('/', (req, res)=>{
    res.header('Alow', 'GET, OPTION')
    res.status(204).send()
})
router.options('/:id', (req, res)=>{
    res.header('Alow', 'GET, OPTION')
    res.status(204).send()
})

module.exports = router