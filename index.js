
//Projeto Pplware - NodeJS

const express = require('express');
const bodyParser = require('body-parser');
const smartphones = require('./routes/smartphones.route'); // Importa rota
const app = express();


// Configurar acesso à BD.
const mongoose = require('mongoose');
let url = 'mongodb://bd_user:123qwe@ds153380.mlab.com:53380/smartphones';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use('/smartphones', smartphones);

let porto = 8000;
app.listen(porto, () => {
    console.log('Servidor em execução no porto' + porto);
});
