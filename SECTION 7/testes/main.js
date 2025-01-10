const express = require('express')
const app = express()
const porta_init_Server = 3000

app.get('/api/:id/:login' , (req , res) => {
    if (req.params.id == 'batata' & req.params.login == 'tunga') {
        res.send('Usuario Batata seu Numero \n' + (Number(req.query.num ) + Number(req.query.num2)))
        
    }
    else {
        res.send('not user' + (Number(req.query.num ) + Number(req.query.num2)))
    }
} )

app.listen((porta_init_Server) ,() => { 
    console.log('Ouvindo ...')

})