const express = require("express");
const router = require("./src/routes/routes")
const app = express();
const _initserver_ = 3000;

app.use(express.json());
app.use(router)

app.listen(_initserver_ , () => {
    console.log('Serviço Rodando na Porta 3000')
});