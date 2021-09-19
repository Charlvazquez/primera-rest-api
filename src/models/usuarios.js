const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    primerNombre: String,
    apellido: String,
    email:String,
    cars:[{ //campo para buscar carro por id
        type:Schema.Types.ObjectId, //busqueda por id
        ref:'carro' //nombre de la base de datos
    }]
});

module.exports = mongoose.model('Usuario',usuarioSchema);// definicion de modelo.