const express = require("express");
const routerUser = require("./src/routes/routes")
const routerPerson = require("./src/routes/person")
const app = express();
const _initserver_ = 3000;
const database = require("../SECTION 12/src/database")

app.use(express.json());
app.use('/api/v1/user' ,routerUser)
app.use('/api/v1/person' ,routerPerson)

    database.db
        .sync({force: false})
        .then((_) => 
            app.listen(_initserver_ , () => {
                console.log('Serviço Rodando na Porta 3000')
            }))
        .catch((e) => {
            console.error('Nao foi possivel conectar com o banco')
        })

