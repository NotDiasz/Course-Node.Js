const express = require('express');

const app = express()
const porta = 3000

app.get('/' , (req,res) => {
res.send('Hello World')
} )

app.listen(porta , () =>{
    console.log('Server ouvindo na porta : ' + porta)
})