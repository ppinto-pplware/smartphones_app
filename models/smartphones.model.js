var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SmartphoneSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    marca: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Smartphone', SmartphoneSchema);
