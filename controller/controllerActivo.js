//get put path delete 
//Por el path
//Pares de llaves valor ?valor arg?= valor1&arg?=
//Cuerpo del http

const models = require( "../models");

const respuestaErronea = "Error al encontrar su recurso"

const findAll = async function(req, res) {
    let valor = await models.Activo.findAll() 
    res.json(valor); 
};

const findById = async function(req, res){
    let valor = await models.Activo.findByPk(req.params.id)
    console.log(valor)
    if(valor==null){
        res.json(respuestaErronea)
    }
     else{res.json(valor);} 

};
const deleteId = async function(req,res){
    let idABorrar = req.params.id;
    console.log(idABorrar);
    await models.ActivoconTag.destroy({
        where:{
            activoID:idABorrar
        }
    })
    await models.Activo.destroy({
        where:{
            id:idABorrar
        }
    });
    let valor = await models.Activo.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){
    let objetoJson = req.body;
    let responsable = await models.Responsable.findOne({
        where:
        {
            id:objetoJson.responsableID
        }
    });
    let ubicacion = await models.Ubicacion.findByPk(objetoJson.ubicacionID)
    if(responsable!=undefined & ubicacion !=undefined){
   await models.Activo.create({
        numSerie : objetoJson.numSerie,
        numInventario: objetoJson.numInventario,
        descripcion: objetoJson.descripcion,
        imagen: objetoJson.imagen,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    let activoCreado = await models.Activo.findOne({
        where:{
            numSerie:objetoJson.numSerie
        }
    })
    await activoCreado.setUbicacion(ubicacion);
    await activoCreado.setResponsable(responsable);
    }
    let valor = await models.Activo.findAll();
    await res.json(valor);
}
const put = async function(req,res){
    
    let idObtenido = req.params.id; 
    let objetoJson= req.body;
    let responsable = await models.Responsable.findByPk(objetoJson.responsableID);
    let ubicacion = await models.Ubicacion.findByPk(objetoJson.ubicacionID)
    let activoACambiar = await models.Activo.findByPk(idObtenido);
    console.log(responsable!=null);
    console.log(ubicacion !=null );
    console.log( activoACambiar !=null);
    if(responsable!=null & ubicacion !=null & activoACambiar !=null){
        activoACambiar.numSerie = objetoJson.numSerie;
        activoACambiar.numInventario= objetoJson.numInventario;
        activoACambiar.descripcion =  objetoJson.descripcion;
        activoACambiar.imagen = objetoJson.imagen;
        activoACambiar.updatedAt = new Date();
    
        console.log(activoACambiar);
    await activoACambiar.save();
    
    activoACambiar.setUbicacion(ubicacion);
    activoACambiar.setResponsable(responsable);
    await activoACambiar.save();
    }


    let valor = await models.Activo.findAll();
    await res.json(valor)
};

module.exports = {findAll,findById,deleteId,post,put};