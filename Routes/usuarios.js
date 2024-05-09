const express =require('express');
const router = express.Router();
const usuario = require('../controller/controllerUsuario.js');
//Se imlementa lo que se utilizará en cada método
router.get('/',usuario.findAll);
router.get('/:id',usuario.findById);
router.post('/',usuario.post);
router.put('/:id',usuario.put);
router.delete('/:id',usuario.deleteId);

module.exports =  router;
 