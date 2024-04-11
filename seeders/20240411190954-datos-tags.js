'use strict';

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
    
      await queryInterface.bulkDelete('tags', null, {});
     
  }
};
