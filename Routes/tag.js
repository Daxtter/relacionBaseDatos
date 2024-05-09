const express =require('express');
const router = express.Router();
const tag = require('../controller/controllerTag.js');
//Se imlementa lo que se utilizará en cada método
router.get('/',tag.findAll);
router.get('/:id',tag.findById);
router.post('/',tag.post);
router.put('/:id',tag.put);
router.delete('/:id',tag.deleteId);

module.exports =  router;
 