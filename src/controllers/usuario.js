const Usuario = require('../models/usuarios');
const Carro = require('../models/carro');

module.exports={

    index: async (req, res, next) => {
        const usuarios = await Usuario.find({});
		res.status(200).json(usuarios);
	},
    
    newUsuario: async(req, res, next)=>{
        const newUsuario = new Usuario(req.body);
        const usuario = await newUsuario.save();
        res.status(200).json(usuario);
    },

    getUser: async(req,res,next)=>{
       const { usuarioId} = req.params;
       const usuario = await Usuario.findById(usuarioId);
       res.status(200).json(usuario);
    },

    replaceUsuario: async(req,res,next) =>{
        const { usuarioId} = req.params;
        const newUsuario = req.body;
        const oldUsuario = await Usuario.findByIdAndUpdate(usuarioId, newUsuario);
        res.status(200).json({success:true});
    },
    
    updateUsuario: async(res,req,next)=>{
        const { usuarioId} = req.params;
        const newUsuario = req.body;
        const oldUsuario = await Usuario.findByIdAndUpdate(usuarioId, newUsuario);
        res.status(200).json({success:true});
    },

    //deleteUsuario:async(res,req,next)=>{
        //const { usuarioId} = req.params;
        //await Usuario.findByIdAndRemove(usuarioId);
        //res.status(200).json({success:true});
    //}

    getUsuariosCarros: async(req,res,next)=>{
        const { usuarioId} = req.params;
        const usuario = await Usuario.findById(usuarioId).populate('cars');
        res.status(200).json(usuario.cars);
    },

    newUsuarioCarro: async(req,res,next)=>{
        const { usuarioId} = req.params; //id para saber de que usuario se agregara el carro
        const newCarro = new Carro(req.body);
        const usuario = await Usuario.findById(usuarioId); //buscar usuario por id
        newCarro.vendedor = usuario; //definir el campo con el que se relacionan
        await newCarro.save();//guardar el dato del carro
        usuario.cars.push(newCarro);//almacenar el carro agregado
        await usuario.save();//carro agregado a los datos del usuario
        res.status(201).json(newCarro);

    }


};