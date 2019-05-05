const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize');

//conexao com o bd mysql
const sequelize = new Sequelize('sistemadecadastro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

//Config
    //Template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main'} ))
app.set('view engine', 'handlebars')

// Rotas

app.get('/cadastro', function(req, res){
    res.send('CADASTRO DE POSTAGENS')
})

app.listen(3001, function(){
    console.log('Servidor rodando na porta 3001')
})