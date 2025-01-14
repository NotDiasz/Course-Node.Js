const express = require('express');


const app = express()
const porta = 3000
app.use(express.json()); //aqui chamamos o json

app.post('/somar' , (req,res) => {
       
        const {num1 , num2} = req.body //aqui o body e o json nois buscamos no json que definimos no postman num1 e num2 para fazer a soma e la mesmo definimos os valores ai nosso server local 3000 puxa e nos mostra[´]
        res.status(201).send({
            mensagem: `a soma e ${num1+num2}`

        })
} )

app.listen(porta , () =>{
    console.log('Server ouvindo na porta : ' + porta)
})