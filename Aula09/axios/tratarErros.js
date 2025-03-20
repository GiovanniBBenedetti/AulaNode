const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/todos/201')
.then(response =>{
    console.log('dados recebidos: ', response.data)
})
.catch(error =>{
    console.error('Ocorreu um erro: ', error.message)
    console.error('Ocorreu um erro: ', error.response.status)
    console.error('Ocorreu um erro: ', error.response.statusText)
})