const express = require('express');
const { ApiMulti, ApiSomar } = require('./api/operacoes');
const { soma, multi } = require('./services/opr');
module.exports = {soma , multi}

const __Init__Server = 3000

const app = express()
app.use(express.json());

app.post('/multi' , ApiMulti)
app.post('/somar' , ApiSomar)

app.listen(__Init__Server , () =>{
    console.log('Ouvindo...')
})

