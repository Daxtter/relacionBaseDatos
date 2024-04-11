const models = require("./models");

async function demostracion(){
    /* 
    await models.Activo.create({
      numSerie: 1,
      numInventario: 1,
      descripcion: "Tableta",
      imagen: null,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    //let activo = models.Activo.findAll();
     models.Tag.create({
        nombre: "Dispositivo",
        createdAt: new Date(),
        updatedAt: new Date()
    });

    let activosAAgregar = await models.Activo.findOne({
        where:{
            numSerie:1
        }
    });

    let tag = await models.Tag.findOne({
        where: {
            nombre: "Dispositivo"
        }
    });

    await tag.addActivos(activosAAgregar);
    
    */
   let activoTableta =await  models.Activo.findOne({
    where:{
        descripcion:"Tableta"
    }
   });
   
    await console.log(activoTableta); 

    let responsable = await models.Responsable.findOne({
        where:{
            nombre:"Manuel"
        }
    })
    await console.log(responsable);

    
    let tag = await models.Tag.findOne({
        where:{
            nombre:"dispositivo"
        }
    })
    
   //let tag =await models.Tag.findByPk(1);
       await console.log(tag);
    

       await tag.addActivo(activoTableta);
    models.sequelize.close();
}
demostracion();