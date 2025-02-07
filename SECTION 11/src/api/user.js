const serviceUser = require("../services/user")

class ApiUser {
    FindAll( req, res) {
        try {
            const result = serviceUser.FindAll()
            res.status(200).send({result}) 
        } catch {
            res.status(501).send({msg : "Error"})
        }
    }
    FindByIndex(req , res) {
        try {
            const {index} = req.params
            const result = serviceUser.FindByIndex(index)
            res.status(200).send({result}) 
        } catch {
            res.status(501).send({msg : "Error"})
        }
    }
    Create(req , res) {
        try {
            const {name} = req.body
            const result = serviceUser.Create(name)
            res.status(201).send({}) 
        } catch {
            res.status(501).send({msg : "Error"})
        }
    }
    Update(req , res) {
        try {
            const {index} = req.params
            const {name} = req.body
            serviceUser.Update(index,name)
            res.status(201).send({}) 
        } catch {
            res.status(501).send({msg : e.msg})
        }
    }
    Delete(req , res) {
        try {
            const {index} = req.params
            serviceUser.Delete(index)
            res.status(204).send({}) 
        } catch {
            res.status(501).send({msg : e.msg})
        }
    }

}

module.exports = new ApiUser();

