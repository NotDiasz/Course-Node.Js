const serviceUser = require("../services/user")

class ApiUser {
    async FindAll( req, res) {
        try {
            const result = await serviceUser.FindAll()
            res.status(200).send({result}) 
        } catch {
            res.status(501).send({msg : "Error"})
        }
    }
    async FindById(req , res) {
        try {
            const {id} = req.params
            const result = await serviceUser.FindById(id)
            res.status(200).send({result}) 
        } catch {
            res.status(501).send({msg : "Error"})
        }
    }
    async Create(req , res) {
        try {
            const { password , email} = req.body
            await serviceUser.Create( password , email)
            res.status(201).send({}) 
        } catch {
            res.status(501).send({msg : "Error"})
        }
    }
    async Update(req , res) {
        try {
            const {id} = req.params
            const {password , email} = req.body
            const result = await serviceUser.Update(id, password , email)
            res.status(201).send({}) 
        } catch {
            res.status(501).send({msg : e.msg})
        }
    }
    async Delete(req , res) {
        try {
            const {id} = req.params
            
            await serviceUser.Delete(id)
            res.status(204).send({}) 
        } catch {
            res.status(501).send({msg : e.msg})
        }
    }

}

module.exports = new ApiUser();

