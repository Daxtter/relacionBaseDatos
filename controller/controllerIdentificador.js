const models = require( "../models");

const respuestaErronea = "Error al encontrar su recurso"

const findAll = async function(req, res) {
    let valor = await models.Identificador.findAll() 
    res.json(valor); 
};

const findById = async function(req, res){
    let valor = await models.Identificador.findByPk(req.params.id)
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
            IdentificadorID:idABorrar
        }
    })
    await models.Identificador.destroy({
        where:{
            id:idABorrar
        }
    });
    let valor = await models.Identificador.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){
    let objetoJson = req.body;
    await models.Identificador.create({
        nombre : objetoJson.nombre,
        ip : objetoJson.ip,
        createdAt: new Date(),
        updatedAt: new Date()
    })

    
    let valor = await models.Identificador.findAll();
    await res.json(valor);
}
const put = async function(req,res){
    
    let idObtenido = req.params.id; 
    let objetoJson= req.body;
    let IdentificadorACambiar = await models.Identificador.findByPk(idObtenido);
    if(IdentificadorACambiar !=null){
        IdentificadorACambiar.nombre = objetoJson.nombre,
        IdentificadorACambiar.ip = objetoJson.ip,
        IdentificadorACambiar.updatedAt= new Date()
        await IdentificadorACambiar.save();
    }
    let valor = await models.Identificador.findAll();
    await res.json(valor)
}

module.exports = {findAll,findById,deleteId,post,put};