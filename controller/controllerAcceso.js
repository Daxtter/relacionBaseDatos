const models = require( "../models");

const respuestaErronea = "Error al encontrar su recurso"

const findAll = async function(req, res) {
    let valor = await models.Acceso.findAll() 
    res.json(valor); 
};

const findById = async function(req, res){
    let valor = await models.Acceso.findByPk(req.params.id)
    console.log(valor)
    if(valor==null){
        res.json(respuestaErronea)
    }
     else{res.json(valor);} 

};
const deleteId = async function(req,res){
    let idABorrar = req.params.id;

    await models.Usuario.destroy({
        where:{
            AccesoID:idABorrar
        }
    })
    await models.Acceso.destroy({
        where:{
            id:idABorrar
        }
    });
    let valor = await models.Acceso.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){
    let objetoJson = req.body;
    await models.Acceso.create({
        tipo : objetoJson.tipo,
        createdAt: new Date(),
        updatedAt: new Date()
    })

    
    let valor = await models.Acceso.findAll();
    await res.json(valor);
}
const put = async function(req,res){
    
    let idObtenido = req.params.id; 
    let objetoJson= req.body;
    let AccesoACambiar = await models.Acceso.findByPk(idObtenido);
    if(AccesoACambiar !=null){
        AccesoACambiar.tipo = objetoJson.tipo,
        AccesoACambiar.updatedAt= new Date()
        await AccesoACambiar.save();
    }
    let valor = await models.Acceso.findAll();
    await res.json(valor)
}

module.exports = {findAll,findById,deleteId,post,put};