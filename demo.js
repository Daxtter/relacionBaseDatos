const models = require("./models");

async function demostracion(){
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
    
    let ubicacion = await models.Ubicacion.findOne({
        where:
        {
            descripcion:'Laboratorio A'
        }
    })
    console.log(ubicacion)
       //await activoTableta.addTag(tag);
       //await activoTableta.setUbicacion(ubicacion);
        //await ubicacion.addActivo(activoTableta);
       //await tag.addActivo(activoTableta);
    let acceso = await models.Acceso.findOne({
        where:{
            tipo:"API"
        }
    });
    console.log(acceso);
    let id =await  models.Identificador.findOne({
        where:{
            nombre:"Jose perez"
        }
    });
    console.log(id);
    await id.addAcceso(acceso);


    models.sequelize.close();
}
demostracion();
