const models = require( "../models");

const respuestaErronea = "Error al encontrar su recurso"

const findAll = async function(req, res) {
    let valor = await models.Usuario.findAll() 
    res.json(valor); 
};

const findById = async function(req, res){
    let valor = await models.Usuario.findByPk(req.params.id)
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
            id:idABorrar
        }
    });
    let valor = await models.Usuario.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){

    
    let objetoJson = req.body;
    let acceso = await models.Acceso.findByPk(objetoJson.AccesoID);
    let identi = await models.Identificador.findByPk(objetoJson.IdentificadorID);
    
    console.log(acceso);
    console.log(identi);
    if(identi != null & acceso !=null){
        await acceso.addIdentificador(identi);
        
    }
    
    let valor = await models.Usuario.findAll();
    await res.json(valor);
}
const put = async function(req,res){
    
    let idObtenido = req.params.id; 
    let objetoJson= req.body;
    let acceso = await models.Acceso.findByPk(objetoJson.AccesoID);
    let identi = await models.Identificador.findByPk(objetoJson.IdentificadorID);
    let usuario = await models.Usuario.findByPk(idObtenido);
    if(usuario != null & identi !=null & acceso !=null){
        usuario.AccesoID = acceso.id;
        usuario.IdentificadorID = identi.id;
        usuario.updateAt = new Date();
        usuario.save();
       // Activot.setTag(tag);
    }
    let valor = await models.Usuario.findAll();
    await res.json(valor)
}

module.exports = {findAll,findById,deleteId,post,put};