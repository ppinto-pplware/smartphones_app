var express = require('express');
var router = express.Router();


// Colocar controller que ainda não foi criado
var controllers = require('../controllers/smartphones.controller.js');
// teste simples
router.get('/testar', controllers.testar);

//Criar registo na base de dados
router.post('/create', controllers.create);

//Ler registo na Base de Dados
router.get('/:id', controllers.details);

module.exports = router;
