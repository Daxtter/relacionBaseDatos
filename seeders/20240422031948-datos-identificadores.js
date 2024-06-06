'use strict';
const models = require( "../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Identificadores",[{
      nombre:"Manuel",
      email: "luis.nunez25@uabc.edu.mx",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre:"Profesor",
      email:"molguin@uabc.edu.mx",
      createdAt: new Date(),
      updatedAt: new Date()
    }])

    
    let identi = await models.Identificador.findAll();
    let acceso = await models.Acceso.findAll();
    await acceso[0].addIdentificador(identi[0]);
    await acceso[1].addIdentificador(identi[1]);
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete("Identificadores",null,{});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
