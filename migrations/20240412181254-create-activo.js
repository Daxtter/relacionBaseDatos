'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numSerie: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      numInventario: {
        type: Sequelize.INTEGER,
        unique: true
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
        
      },
      ubicacionID:{
        type: Sequelize.INTEGER,
        /*
        references:{
          model: "ubicaciones",
          key: "id"
        }
        */
      },
      responsableID:{
        type: Sequelize.INTEGER,
        /*
        references:{
          model: "responsables",
          key: "id"
        }
        */
      },
      imagen: {
        type: Sequelize.BLOB,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Activos');
  }
};