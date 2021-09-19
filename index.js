const bodyParser = require('body-parser');
const morgan = require('morgan');// modulo para ver peticiones del servidor 
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const usuariosRoutes = require('./src/routes/usuarios'); //constante para rutas de usuario

//conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest-api-ejemplo',{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('base de datos conectada'))
    .catch(err => console.log(err));

//configuraciones
app.use(morgan('dev'));
app.set('port', process.env.PORT || 3420);


//middleware
app.use(bodyParser.json());

//rutas
app.use('/usuarios', usuariosRoutes); //rutas para usuarios


app.listen(app.get('port'),()=>{
    console.log('servidor en puerto', app.get('port'));
});