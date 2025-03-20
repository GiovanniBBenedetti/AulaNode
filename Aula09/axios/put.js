const axios = require('axios')

axios.put('https://jsonplaceholder.typicode.com/todos/1', {
userId:1,
title:'Comprar casa',
completed: false
})
.then(response =>{
    console.log('todo atualizado: ', response.data)
})
.catch(error =>{
console.log('Ocorreu um erro ', error)
})