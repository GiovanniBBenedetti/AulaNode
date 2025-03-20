import axios from "axios";
import chalk from "chalk";

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response =>{
    console.log(chalk.green('dados recebidos !!!'), chalk.red(JSON.stringify(response.data)))
})
.catch(error =>{
    console.error(chalk.red('Ocorreu um erro: '), error.massage)
})