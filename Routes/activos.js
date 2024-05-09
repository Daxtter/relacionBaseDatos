const express =require('express');
const router = express.Router();
const activo = require('../controller/controllerActivo.js');
//Se imlementa lo que se utilizará en cada método
router.get('/',activo.findAll);
router.get('/:id',activo.findById);
router.post('/',activo.post);
router.put('/:id',activo.put);
router.delete('/:id',activo.deleteId);

module.exports = router; 