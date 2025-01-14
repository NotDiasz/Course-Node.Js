const { soma, multi } = require("../services/opr")

module.exports = {soma , multi}

function ApiSomar (req , res) {
    const {num1 , num2} = req.body
    const result = soma(num1, num2)
    res.status(201).send({result: result})
}

function ApiMulti (req , res) {
    const {num1 , num2} = req.body
    const result = multi(num1, num2)
    res.status(201).send({result: result})
}

module.exports = {ApiMulti , ApiSomar}

