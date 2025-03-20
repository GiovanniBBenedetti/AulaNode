const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response =>{
    console.log('dados recebidos: ', response.data)
})
.catch(error =>{
    console.error('Ocorreu um erro: ', error)
})