const fs = require('fs')
const os = require('os');


const conteudo = `Plataforma : ${os.platform()}
    Arquitetura: ${os.arch()}
    Informações da CPU ${os.cpus}
    Diretorio do usuarios ${os.homedir}`;

fs.writeFile('info_sistema.txt', conteudo, err => {
    if (err) throw err;
    console.log('Arquivo Salvo!')
})
