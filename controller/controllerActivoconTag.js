const models = require( "../models");

const respuestaErronea = "Error al encontrar su recurso"

const findAll = async function(req, res) {
    let valor = await models.ActivoconTag.findAll() 
    res.json(valor); 
};

const findById = async function(req, res){
    let valor = await models.ActivoconTag.findByPk(req.params.id)
    console.log(valor)
    if(valor==null){
        res.json(respuestaErronea)
    }
     else{res.json(valor);} 

};
const deleteId = async function(req,res){
    let idABorrar = req.params.id;

    await models.ActivoconTag.destroy({
        where:{
            id:idABorrar
        }
    });
    let valor = await models.ActivoconTag.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){

    
    let objetoJson = req.body;
    let tag = await models.Tag.findByPk(objetoJson.tagID);
    let activo = await models.Activo.findByPk(objetoJson.activoID);
    
    if(tag != null & activo !=null){
        await activo.addTag(tag);
        
    }
    
    let valor = await models.ActivoconTag.findAll();
    await res.json(valor);
}
const put = async function(req,res){
    
    let idObtenido = req.params.id; 
    let objetoJson= req.body;
    let tag = await models.Tag.findByPk(objetoJson.tagID);
    let activo = await models.Activo.findByPk(objetoJson.activoID);
    let Activot = await models.ActivoconTag.findByPk(idObtenido);
    console.log(tag);
    console.log(activo);
    console.log(Activot);
    if(tag != null & activo !=null & Activot !=null){
        Activot.activoID = activo.id;
        Activot.TagID = tag.id;
        Activot.updateAt = new Date();
        Activot.save();
       // Activot.setTag(tag);
    }
    let valor = await models.ActivoconTag.findAll();
    await res.json(valor)
}

module.exports = {findAll,findById,deleteId,post,put};