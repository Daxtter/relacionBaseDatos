'use strict';
const models = require( "../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkInsert("Ubicaciones",[{
      descripcion:'Laboratorio A'
    },
    {
      descripcion:"Laboratorio B"
    },
    {
      descripcion:"Laboratorio C"
    }])
    let ubicacion = await models.Ubicacion.findAll();
    let activos = await models.Activo.findAll();
    await activos[0].setUbicacion(ubicacion[0]);
    await activos[1].setUbicacion(ubicacion[0]);
    await activos[2].setUbicacion(ubicacion[1]);
    await activos[3].setUbicacion(ubicacion[1]);
    await activos[4].setUbicacion(ubicacion[2]);
  },
  

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Ubicaciones', null, {});
     
  }
};
