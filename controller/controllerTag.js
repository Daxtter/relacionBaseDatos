const models = require( "../models");

const respuestaErronea = "Error al encontrar su recurso"

const findAll = async function(req, res) {
    let valor = await models.Tag.findAll() 
    res.json(valor); 
};

const findById = async function(req, res){
    let valor = await models.Tag.findByPk(req.params.id)
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
            tagID:idABorrar
        }
    })
    await models.Tag.destroy({
        where:{
            id:idABorrar
        }
    });
    let valor = await models.Tag.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){
    let objetoJson = req.body;
    await models.Tag.create({
        nombre : objetoJson.nombre,
        createdAt: new Date(),
        updatedAt: new Date()
    })

    
    let valor = await models.Tag.findAll();
    await res.json(valor);
}
const put = async function(req,res){
    
    let idObtenido = req.params.id; 
    let objetoJson= req.body;
    let TagACambiar = await models.Tag.findByPk(idObtenido);
    if(TagACambiar !=null){
        TagACambiar.nombre = objetoJson.nombre,
        TagACambiar.updatedAt= new Date()
        await TagACambiar.save();
    }
    let valor = await models.Tag.findAll();
    await res.json(valor)
}

module.exports = {findAll,findById,deleteId,post,put};