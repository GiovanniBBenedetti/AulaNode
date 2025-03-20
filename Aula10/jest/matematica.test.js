
//test suite
const {somar, dividir, subtrair} = require('./matematica')



describe('Função somar: ',()=>{
    //teste 1
    it('deve somar dois números positivos corretamente', ()=>{
        expect(somar(2,3)).toBe(5)
    })

    //teste 2
    it('deve somar dois número positivo e outro negativos corretamente', ()=>{
        expect(somar(-2,3)).toBe(1)
    })


    //teste 3

    it('deve somar somente números negativos corretamente', ()=>{
        expect(somar(-2,-3)).toBe(-5)
    })
})

describe('Função dividir', ()=>{
    it('deve subtrair dois números positivos corretamente', ()=>{
        expect(subtrair(10,5)).toBe(5)
    })
})


