const bancoBD = new Array("joao" , "ana" , "renan")

class RepositoryPessoa {
    PegarTodos(){
        return bancoBD;
    }
    PegarUm(index){
        return bancoBD[index];
    }
    Adicionar(nome){
        bancoBD.push(nome);
    }
    Alterar(index , nome){
        bancoBD[index] = nome
    }
    Deletar(index){
        bancoBD.splice(index);
    }
}

module.exports = RepositoryPessoa