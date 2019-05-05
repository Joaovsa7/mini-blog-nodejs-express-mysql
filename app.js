    const express = require("express");
    const app = express();
    const handlebars = require('express-handlebars');
    const bodyParser = require('body-parser');
    const Posts = require('./models/posts')

    //Config
    //Template engine
    app.engine('handlebars', handlebars({ defaultLayout: 'main'} ))
    app.set('view engine', 'handlebars')

    //BodyParser

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    // Rotas
    app.get('/',  function(req, res){
        res.render("home")
    })

    app.get('/cadastro', function(req, res){
        res.render("formulario")
    })

    app.post('/add', function(req, res){
        Posts.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('Aconteceu o erro ' + erro)
        })
    })

    app.listen(3001, function(){
        console.log('Servidor rodando na porta 3001')
    })