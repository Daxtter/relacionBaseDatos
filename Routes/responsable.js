const express= require('express');
const router = express.Router();
const responsable = require( '../controller/controllerResponsable.js')
//Se imlementa lo que se utilizará en cada método
router.get('/',responsable.findAll);
router.get('/:id',responsable.findById);
router.post('/',responsable.post);
router.put('/:id',responsable.put);
router.delete('/:id',responsable.deleteId);

module.exports =  router;