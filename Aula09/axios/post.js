const axios = require('axios')

axios.post('https://jsonplaceholder.typicode.com/todos', {
userId:1,
title:'Comprar leite',
completed: false
})
.then(response =>{
    console.log('Novo todo criado: ', response.data)
})
.catch(error =>{
console.log('Ocorreu um erro ', error)
})