const { describe , expect , it} = require('@jest/globals')
const ServicePessoa = require('../src/services/pessoa')

describe("Primeiro teste de pessoa" , () => {
    const service = new ServicePessoa();

    it("Add um nome na lista", () => {
        const nome = "Ana"
        service.Adicionar(nome);

        const nomes = service.PegarTodos()
        expect(nomes[nomes.length - 1]).toBe(nome)
    })

    it("Update um nome na lista", () => {
        const nome = "Lucas"
        const index = 2
        service.Alterar(2 ,nome);

        const nomes = service.PegarTodos()
        expect(nomes[index]).toBe(nome)
    })
     it("Deletar um nome na lista", () => {
        const index = 3
        const NomeAntes = service.PegarUm(index)
        service.Deletar(index);
        const NomeDepois = service.PegarUm(index) 

        expect(NomeAntes).not.toBe(NomeDepois)
    })
    
})