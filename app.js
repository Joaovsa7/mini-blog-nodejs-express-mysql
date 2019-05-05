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
        Posts.findAll({order: [['id', 'desc']] }).then(function(posts){
            res.render('home', { posts: posts })
        })
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

    app.get('/deletar/:id', function(req, res){
        Posts.destroy({ where: {'id': req.params.id } })
        .then(function(){
            res.send('Postagem deletada com sucesso')
        }).catch(function(erro){
            res.send("Esta postagem não existe")
        })
    })

    app.listen(3001, function(){
        console.log('Servidor rodando na porta 3001')
    })