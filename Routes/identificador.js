const express =require('express');
const router = express.Router();
const identificador = require('../controller/controllerIdentificador.js');
//Se imlementa lo que se utilizará en cada método
router.get('/',identificador.findAll);
router.get('/:id',identificador.findById);
router.post('/',identificador.post);
router.put('/:id',identificador.put);
router.delete('/:id',identificador.deleteId);

module.exports = router;
 