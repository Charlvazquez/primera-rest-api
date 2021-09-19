const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const carroSchema = new Schema({
    marca:String,
    modelo:String,
    año:Number,
    vendedor:{
        type:Schema.Types.ObjectId,//id con el que se relacionara 
        ref:'usuarios'//base de datos de referencia
    }

});




module.exports = mongoose.model('carro', carroSchema)// definicion de base de datos