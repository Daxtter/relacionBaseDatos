const express =require( 'express')
const router = express.Router();
const ubicacion = require( '../controller/controllerUbicacion.js')
//Se imlementa lo que se utilizará en cada método
router.get('/',ubicacion.findAll);
router.get('/:id',ubicacion.findById);
router.post('/',ubicacion.post);
router.put('/:id',ubicacion.put);
router.delete('/:id',ubicacion.deleteId);

module.exports = router;