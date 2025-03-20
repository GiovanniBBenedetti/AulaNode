const buscarDados = require('./funcaoAssincrona')

describe('Função buscar dados: ', ()=>{
    it('Deve retornar os dados corretamente', ()=>{
        return buscarDados()
        .then(data=>{
            expect(data).toBeDefined()
            expect(data.userId).toBe(1)
        })
    })
})