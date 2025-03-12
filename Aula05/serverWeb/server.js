const http = require('http');

const produtos = [
    { id: 1, nome: 'Produto A', preco: 10 },
    { id: 2, nome: 'Produto B', preco: 20 },
    { id: 3, nome: 'Produto C', preco: 30 },



]

const server = http.createServer((req, res) => {
    const { method, url } = req;


    console.log(`Requisição recebida: ${method} ${url}`);

    if (url === '/' && method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>Pagina Inicial</h1>')
    } else if (url === '/produtos' && method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        
    } else if (url.startsWith('/produtos/') && method === "GET") {
        const id = parseInt(url.split('/')[2]);
        const produto = produtos.find(p => p.id === id);
        if (produto) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(produto))
        } else {
            res.writeHead(404, {'Content-Type':'text/html'})
            res.end('<h1>Produto não encontrado</h1>')
        }

    }else if(url ==='/contato' && method  === "POST"){
        let body = ''
        req.on('data', chunk =>{
            body+=chunk;
        });
        req.on('end', ()=>{
            console.log('Dados recebidos ', body)
            res.writeHead(201, {'Content-Type': 'text/html'})
            res.end('<h5>Dados recebidos !!</h5>')
        })
    }else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>Pagina não Encontrada!!</h1>')
    }



})

const port = 3000;

server.listen(port,  () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})