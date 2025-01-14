const express = require('express')

const __Init__Server = 3000

const app = express()
app.use(express.json());

app.post('/funcoes' , (req , res) => {
        const {num1 , num2} = req.body

        function soma(num1 , num2){
            console.log('Soma efetuada')
            return num1 +num2;
        }
        const result = soma(num1, num2)
        res.status(201).send({result: result})
}) 

app.post('/multi' , (req , res) => {
        const {num1 , num2} = req.body

        function multi(num1 , num2) {
            return num1 * num2
        }

        result = multi(num1,num2)
        res.status(201).send({result : result})


})

app.listen(__Init__Server , () =>{
    console.log('Ouvindo...')
})