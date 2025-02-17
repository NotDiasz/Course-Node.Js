
const User = require("../models/user")


class ServiceUser {
    
    async FindAll(){
        return User.findAll();
    }
    async FindById(id){
        return User.findByPk(id);
    }
    async Create(password , email){
        if (!email) {
            throw new Error('Favor informar email')
        } else if (!password) {
            throw new Error('Favor informar email')
        }
        await User.create({
           email ,password
        })
    }
    async Update(id , password , email){
        const oldUser = await User.findByPk(id)
        if (!email) {
            throw new Error('Favor informar email')
        } else if (!password) {
            throw new Error('Favor informar email')
        }

        
        oldUser.email = email
        oldUser.password = password

        oldUser.save()
        return oldUser;
    }
    async Delete(id){
        const user = await User.findByPk(id)
        user.destroy()
    }

}

module.exports = new ServiceUser();
