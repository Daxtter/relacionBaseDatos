'use strict';
const models = require( "../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


    await queryInterface.bulkInsert('responsables', [{
      nombre: "Manuel",
      numEmpleado: 11,
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: "Jose",
      numEmpleado: 12,
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: "Miguel",
      numEmpleado: 13,
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: "Alan",
      numEmpleado: 14,
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: "Ernesto",
      numEmpleado: 15,
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

    
  let Responsable  = await models.Responsable.findAll();
  let activos = await models.Activo.findAll();
  await activos[0].setResponsable(Responsable[0]);
  await activos[1].setResponsable(Responsable[1]);
  await activos[2].setResponsable(Responsable[2]);
  await activos[3].setResponsable(Responsable[3]);
  await activos[4].setResponsable(Responsable[4]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('responsables', null, {});
     
  }
};
