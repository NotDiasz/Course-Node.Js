
const User = require("../models/user")


class ServiceUser {
    
    FindAll(){
        return User.FindAll()
    }
    FindByIndex(index){
        return User.FindByIndex(index)
    }
    Create(nome){
        User.Create(nome)
    }
    Update(index , nome){
        User.Update(index ,nome)
    }
    Delete(index){
        User.Delete(index)
    }

}

module.exports = new ServiceUser();
