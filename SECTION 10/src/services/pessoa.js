const RepositoryPessoa = require("../repository/pessoa");

const repo = new RepositoryPessoa();

class ServicePessoa {
    PegarTodos(){
        return repo.PegarTodos();
    }
    PegarUm(id){
        return repo.PegarUm(id);
    }
    Adicionar(){
        return repo.Adicionar();
    }
    Alterar(){
        return repo.Alterar();
    }
    Deletar(){
        return repo.Deletar();
    }
}

module.exports = ServicePessoa