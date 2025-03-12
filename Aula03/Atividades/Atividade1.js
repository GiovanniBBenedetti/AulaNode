const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout,
});

fs.readFile('Atividade1.json','utf8', (err, data)=>{
    if (err){
        console.log('Erro ao ler o arquivo: ', err);
        return;
    }
    try{
        const dados = JSON.parse(data);
        readline.question('Qual o seu jogo favorito :',jogo=>{
            dados.jogo= jogo

            console.log(`\nSeu nome:  ${dados.nome}\nSeu sobrenome: ${dados.sobrenome}`)
            console.log(`Seu jogo favorito é: ${jogo}`)

            readline.question('\nEscreva seu nome novamente :',nome=>{
            dados.nome = nome

            const jsonData = JSON.stringify(dados, null, 2);
            fs.writeFile ('Atividade1.json', jsonData, 'utf8', (err)=>{
                if(err){
                    console.error('Erro ao escrever no arquivo: ', err)
                    return
                }
                console.log(`\nSeu nome:  ${nome}\nSeu sobrenome: ${dados.sobrenome}`)
                console.log(`Seu jogo favorito é:${jogo}`)
             });
                readline.close();
            })

         });   
    }catch(error){
        console.error('Erro ao analisar o JSON', error)
    }

});

