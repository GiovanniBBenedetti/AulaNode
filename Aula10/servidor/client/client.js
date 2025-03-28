import chalk, { Chalk } from "chalk";
import inquirer from "inquirer";
import axios from "axios";

const API_URL = 'http://localhost:3000'

async function listarProdutos() {
    try {
        const response = await axios.get(`${API_URL}/products`)
        return response.data;
    } catch (error) {
        console.log(chalk.red(`Erro ao listar produtos: `, error.message))
        return [];

    }
}


// exibir os detalhes
async function exibirDetalhesProduto(id) {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`)
        return response.data;
    } catch (error) {
        console.log(chalk.red(`Erro ao exibir o detalhe do produto com o id: ${id}`), error.message)
    }
}


async function exibirMenu() {
    console.log('\n')
    const perguntas = [
        {
            type: 'list',
            name: 'opcao',
            message: chalk.yellow('Escolha uma opção: '),
            choices: [
                { name: chalk.green('Listar Produtos'), value: 'listar' },
                { name: chalk.green('Exibir detalhes do produto'), value: 'exibir' },
                { name: chalk.red('Sair'), value: 'sair' }
            ]
        }
    ]

    try {
        const resposta = await inquirer.prompt(perguntas);
        switch(resposta.opcao){
            case 'listar':
            const produtos = await listarProdutos();
            
            if(Array.isArray(produtos) && produtos.length>0){
                console.log(chalk.green('Lista de produtos :'))
                produtos.forEach(produto => {
                    console.log(`- ${chalk.cyan(produto.id)} : ${chalk.green(produto.nome)} - R$ ${chalk.yellow(produto.preco)} \n`)
                })
            }else{
                console.log(chalk.yellow('Nenhum produto encontrado !!!'))
            }

            
            
            exibirMenu();
            break
            case 'exibir':
                const idResposta = await inquirer.prompt([
                    {
                        type:'input',
                        name: 'id',
                        message: chalk.blue('Digite o id do produto')
                    }
                ])
                const produto = await exibirDetalhesProduto(idResposta.id)
                if(produto){
                console.log(chalk.green('Detalhe do produto :'))
                console.log(`- ${chalk.cyan(produto.id)} : ${chalk.green(produto.nome)} - R$ ${chalk.yellow(produto.preco)} \n`);
                }else{
                    console.log(chalk.yellow('Produto não encontrdo'))
                }
                exibirMenu();
            break
            case 'sair':
            console.log(chalk.blue('Saindo do sistema...'))    
            
            break
        }
    } catch (error) {
        console.log(chalk.red('Ocorreu um erro inesperado'), error)
    }
}

exibirMenu();
