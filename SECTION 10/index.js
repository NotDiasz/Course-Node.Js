const express = require("express");
const routers = require("./src/routes/pessoa")
const app = express();
const _initserver_ = 3000;

app.use(express.json());

app.use(routers)

app.listen(_initserver_ , () => {
    console.log('Serviço Rodando na Porta 3000')
});