'use strict';
const models = require( "../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


    await queryInterface.bulkInsert('tags',[{
      nombre:"dispositivo",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre:"inmueble",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    let activos = await models.Activo.findAll();
    let tagInmueble = await models.Tag.findOne({
      where:
      { 
        nombre:"inmueble"
      }
    })
    
    let tagDispositivo = await models.Tag.findOne({
      where:{
        nombre:"dispositivo"
      }
    })
    
    
    await activos[0].addTag(tagDispositivo);
    await activos[1].addTag(tagDispositivo);
    await activos[2].addTag(tagInmueble);
    await activos[3].addTag(tagInmueble);
    await activos[4].addTag(tagDispositivo);
    



  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('tags', null, {});
     
  }
};
