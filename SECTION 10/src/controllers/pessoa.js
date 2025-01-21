const ServicePessoa = require("../services/pessoa");
const service = new ServicePessoa();
const express = require("express");


class ControllerPessoa {
    PegarTodos(req , res){
        try {
            const nomes = service.PegarTodos();
            res.status(200).json({ nomes });
        }
        catch (error) {
            res.status(500).json({error : 'Throw'});  // Corrigido de 'Trow' para 'Throw'
        }
    }

    PegarUm(req , res){
        try {
            const id = req.params.id;
            const nome = service.PegarUm(id);
            res.status(200).json({ nome });
        }
        catch (error) {
            res.status(500).json({error : 'Throw'});  // Corrigido de 'Trow' para 'Throw'
        }
    }

    Adicionar(req , res){
        try {
            const nome  = req.body.nome;
            const nomes = service.Adicionar(nome);
            res.status(201).json();
        }
        catch (error) {
            res.status(500).json({error : 'Throw'});  // Corrigido de 'Trow' para 'Throw'
        }
    }

    Alterar(req , res){
        try {
            const nome  = req.body.nome;
            const nomes = service.PegarTodos();
            res.status(200).json({ nomes });
        }
        catch (error) {
            res.status(500).json({error : 'Throw'});  // Corrigido de 'Trow' para 'Throw'
        }
    }

    Deletar(req , res){
        try {
            const nome  = req.body.nome;
            const nomes = service.PegarTodos();
            res.status(200).json({ nomes });
        }
        catch (error) {
            res.status(500).json({error : 'Throw'});  // Corrigido de 'Trow' para 'Throw'
        }
    }
}

module.exports = ControllerPessoa;
