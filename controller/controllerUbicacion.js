const models = require( "../models");

const respuestaErronea = "Error al encontrar su recurso"

const findAll = async function(req, res) {
    let valor = await models.Ubicacion.findAll() 
    res.json(valor); 
};

const findById = async function(req, res){
    let valor = await models.Ubicacion.findByPk(req.params.id)
    console.log(valor)
    if(valor==null){
        res.json(respuestaErronea)
    }
     else{res.json(valor);} 

};
const deleteId = async function(req,res){
    let idABorrar = req.params.id;

    
    await models.Ubicacion.destroy({
        where:{
            id:idABorrar
        }
    });
    let valor = await models.Ubicacion.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){
    let objetoJson = req.body;
    await models.Ubicacion.create({
        descripcion : objetoJson.descripcion,
        imagen: objetoJson.imagen,
        createdAt: new Date(),
        updatedAt: new Date()
    })

    
    let valor = await models.Ubicacion.findAll();
    await res.json(valor);
}
const put = async function(req,res){
    
    let idObtenido = req.params.id; 
    let objetoJson= req.body;
    let UbicacionACambiar = await models.Ubicacion.findByPk(idObtenido);
    if(UbicacionACambiar !=null){
        UbicacionACambiar.descripcion = objetoJson.descripcion,
        UbicacionACambiar.imagen= objetoJson.imagen,
        UbicacionACambiar.updatedAt= new Date()
    
    await UbicacionACambiar.save();
    }
    let valor = await models.Ubicacion.findAll();
    await res.json(valor)
}

module.exports = {findAll,findById,deleteId,post,put};