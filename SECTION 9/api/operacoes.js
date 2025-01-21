const { soma, multi } = require("../services/opr")

module.exports = {soma , multi}

function ApiSomar (req , res) {
    try {
        const {num1 , num2} = req.body
        const result = soma(num1, num2)
        res.status(201).send({result: result})
    } catch (e) {
        res.status(500).send({msg : e.message})
    }
}

function ApiMulti (req , res) {
    try {
    const {num1 , num2} = req.body
    const result = multi(num1, num2)
    res.status(201).send({result: result})
    } catch (e) {
        res.status(200).send({msg : e.message})
    }
}

module.exports = {ApiMulti , ApiSomar}

