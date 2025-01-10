const express = require('express');

const app = express()
const porta = 3000

app.get('/api/:id' , (req,res) => {
res.send('Hello World = ' + req.params.id)

} )

app.post('/' , (req,res) => {
res.send('Foi post = ')

} )

app.listen(porta , () =>{
    console.log('Server ouvindo na porta : ' + porta)
})