const ServicePessoa = require("../services/pessoa");
const service = new ServicePessoa();
const express = require("express");

class ControllerPessoa {
    PegarTodos(req, res){
        try {
            const nomes = service.PegarTodos();
            res.status(200).json({ nomes });
        }
        catch (error) {
            res.status(500).json({ error: 'Erro interno ao buscar todos os nomes' });  
        }
    }

    PegarUm(req, res){
        try {
            const id = req.params.id;
            const nome = service.PegarUm(id);
            if (!nome) {
                return res.status(404).json({ error: 'Nome não encontrado' });
            }
            res.status(200).json({ nome });
        }
        catch (error) {
            res.status(500).json({ error: 'Erro interno ao buscar o nome' });  
        }
    }

    Adicionar(req, res){
        try {
            const nome = req.body.nome;
            const sucesso = service.Adicionar(nome);
            if (sucesso) {
                res.status(201).json({ message: 'Nome adicionado com sucesso!' });
            } else {
                res.status(400).json({ error: 'Erro ao adicionar o nome' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro interno ao adicionar nome' }); 
        }
    }

    Alterar(req, res){
        try {
            const id = req.params.id;
            const nome = req.body.nome;
            const sucesso = service.Alterar(id, nome);
            if (sucesso) {
                res.status(200).json({ message: 'Nome alterado com sucesso' });
            } else {
                res.status(400).json({ error: 'Erro ao alterar nome' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro interno ao alterar o nome' });  
        }
    }

    Deletar(req, res){
        try {
            const id = req.params.id;
            const sucesso = service.Deletar(id);
            if (sucesso) {
                res.status(204).send();  // 204 significa sucesso sem conteúdo
            } else {
                res.status(404).json({ error: 'Nome não encontrado' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro interno ao deletar nome' });  
        }
    }
}

module.exports = ControllerPessoa;
