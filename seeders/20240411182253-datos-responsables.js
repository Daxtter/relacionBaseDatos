'use strict';

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
    await queryInterface.bulkDelete('responsables', null, {});
     
  }
};
