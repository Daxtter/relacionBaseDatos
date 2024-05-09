const models = require( "../models");

const respuestaErronea = "Error al encontrar su recurso"

const findAll = async function(req, res) {
    let valor = await models.Responsable.findAll() 
    res.json(valor); 
};

const findById = async function(req, res){
    let valor = await models.Responsable.findByPk(req.params.id)
    console.log(valor)
    if(valor==null){
        res.json(respuestaErronea)
    }
     else{res.json(valor);} 

};
const deleteId = async function(req,res){
    let idABorrar = req.params.id;

    
    await models.Responsable.destroy({
        where:{
            id:idABorrar
        }
    });
    let valor = await models.Responsable.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){
    let objetoJson = req.body;
    await models.Responsable.create({
        nombre : objetoJson.nombre,
        numEmpleado: objetoJson.numEmpleado,
        //imagen: objetoJson.imagen,
        createdAt: new Date(),
        updatedAt: new Date()
    })

    
    let valor = await models.Responsable.findAll();
    await res.json(valor);
}
const put = async function(req,res){
    

    let idObtenido = req.params.id; 
    let objetoJson= req.body;
    let ResponsableACambiar = await models.Responsable.findByPk(idObtenido);
    console.log(objetoJson);
    console.log(idObtenido);
    
    if(ResponsableACambiar !=null){
        try{
        ResponsableACambiar.nombre = objetoJson.nombre,
        ResponsableACambiar.numEmpleado= objetoJson.numEmpleado,
       // ResponsableACambiar.imagen= objetoJson.imagen,
        ResponsableACambiar.updatedAt= new Date()
        await ResponsableACambiar.save();
        }
        catch(e){
            console.log(e);
        }
    
    }
    let valor = await models.Responsable.findAll();
    await res.json(valor)
}

module.exports = {findAll,findById,deleteId,post,put};