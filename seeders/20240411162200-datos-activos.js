'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('activos',[{
      numSerie: 1234,
      numInventario: 4213,
      descripcion: "Tableta",
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numSerie: 1235,
      numInventario: 4214,
      descripcion: "Laptop",
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numSerie: 1236,
      numInventario: 4215,
      descripcion: "Silla",
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numSerie: 1237,
      numInventario: 4216,
      descripcion: "Mesa",
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numSerie: 1238,
      numInventario: 4217,
      descripcion: "Monitor",
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])

  /*
    let ubicacionPrimera = await models.Ubicacion.findOne({
      where:{
        descripcion:'Laboratorio A'
      }
    });
    console.log(ubicacionPrimera);
    let activosIngresar = await models.Activo.findOne({
      where:{
        numSerie:1234
      }
    })
    console.log(activosIngresar)
    activosIngresar.setUbicacion(ubicacionPrimera);
    
  */
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('activos', null, {});
     
  }
};
