const express =require('express');
const router = express.Router();
const acceso = require('../controller/controllerAcceso.js');
//Se imlementa lo que se utilizará en cada método
router.get('/',acceso.findAll);
router.get('/:id',acceso.findById);
router.post('/',acceso.post);
router.put('/:id',acceso.put);
router.delete('/:id',acceso.deleteId);

module.exports = router;
 