const router = require('express-promise-router')();


const {
    index,
    newUsuario,
    getUser,
    replaceUsuario,
    getUsuariosCarros,
    newUsuarioCarro
    //deleteUsuario
} = require('../controllers/usuario');

//rutas de usuario
router.get('/', index); // ruta para tener datos del los usuarios
router.post('/', newUsuario); //ruta para crear usuarios
router.get('/:usuarioId',getUser); //ruta para seleccionar un solo usuario por su Id
router.put('/:usuarioId',replaceUsuario); //ruta para remplazar datos de usuario
//router.delete('/:usuarioId',deleteUsuario);

//rutas de carros
router.get('/:usuarioId/carros',getUsuariosCarros);
router.post('/:usuarioId/carros',newUsuarioCarro)


module.exports = router;