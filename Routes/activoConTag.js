const express =require('express');
const router = express.Router();
const activocontag = require('../controller/controllerActivoconTag.js');
//Se imlementa lo que se utilizará en cada método
router.get('/',activocontag.findAll);
router.get('/:id',activocontag.findById);
router.post('/',activocontag.post);
router.put('/:id',activocontag.put);
router.delete('/:id',activocontag.deleteId);

module.exports = router;
 