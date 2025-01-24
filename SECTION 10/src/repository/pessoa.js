const bancoBD = new Array("joao", "ana", "renan");

class RepositoryPessoa {
    PegarTodos(){
        return bancoBD;
    }
    PegarUm(index){
        if (index >= 0 && index < bancoBD.length) {
            return bancoBD[index];
        }
        return null;  // Retorna null se o índice não for válido
    }
    Adicionar(nome){
        bancoBD.push(nome);
        return true;
    }
    Alterar(index, nome){
        if (index >= 0 && index < bancoBD.length) {
            bancoBD[index] = nome;
            return true;
        }
        return false;  // Retorna false se o índice não for válido
    }
    Deletar(index){
        if (index >= 0 && index < bancoBD.length) {
            bancoBD.splice(index, 1);
            return true;
        }
        return false;  // Retorna false se o índice não for válido
    }
}

module.exports = RepositoryPessoa;
