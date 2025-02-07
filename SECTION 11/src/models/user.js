const users = new Array("Jao" , "Ana","Joe")

class User {

    FindAll(){
        return users;
    }

    FindByIndex(index){
        return users[index];
    }

    Create(nome){
        users.push(nome)
    }

    Update(index , nome){
        users[index] = nome
    }
    Delete(){
        users.splice(index,1)
    }
}

module.exports = new User();