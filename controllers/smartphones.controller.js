var Smartphone = require('../models/smartphones.model.js');

exports.testar = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// Função CREATE
exports.create = function (req, res) {
    var smartphone = new Smartphone(
        {
            nome: req.body.nome,
            marca: req.body.marca
        }
    );

    smartphone.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

// Função READ
exports.details = function (req, res) {
    Smartphone.findById(req.params.id, function (err, smartphone) {
if (err) return next(err);
        res.send(smartphone);
    })
};

