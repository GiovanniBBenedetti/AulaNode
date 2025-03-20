const axios = require('axios')

axios.patch('https://jsonplaceholder.typicode.com/todos/1', {

title:'Comprar note',

})
.then(response =>{
    console.log('todo atualizado:(parcial) ', response.data)
})
.catch(error =>{
console.log('Ocorreu um erro ', error)
})