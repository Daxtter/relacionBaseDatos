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
    

       await tag.addActivo(activoTableta);
    models.sequelize.close();
}
demostracion();
/////////////////jhbujhbhjb