const os = require('os');
console.log(`Plataforma : ${os.platform()}`);
console.log(`Arquitetura: ${os.arch()}`);
console.log(`Informações da CPU ${os.cpus}`)
console.log(`Diretorio do usuarios ${os.homedir}`)
