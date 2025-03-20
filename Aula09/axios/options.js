const axios = require('axios')

axios.request({
    method:'options',
    url:'https://jsonplaceholder.typicode.com/todos/1'
})
.then(response=>{
    console.log('Métodos permitidos: ', response.headers.allow);
    console.log('Cabeçalho: ',response.headers)
})
.catch(error =>{
    console.error('Ocorreu um erro: ', error)
})