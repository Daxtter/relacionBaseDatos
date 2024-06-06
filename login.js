const models = require("./models") //Models usuarios
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config(".env.develoment.local");
const{OAuth2Client, JWT} = require("google-auth-library");
const client = new OAuth2Client("115950979193-q0l4theofb51p2mrkvliaht35iginqll.apps.googleusercontent.com");
module.exports.login = async function login(req,res){
    try{
        console.log(req.body);
        console.log("INICIO de login");
            const ticket = await client.verifyIdToken({
            idToken: req.body.token,
            audience: "115950979193-q0l4theofb51p2mrkvliaht35iginqll.apps.googleusercontent.com"
        });

        console.log("Ticket desde google",ticket);
        //Revisar en la base de datos
        let usuario = await models.Identificador.findOne({
            where:{
                email:ticket.payload.email
            }
        });
        console.log("Se obtuvo el usuario");
        if(usuario != undefined)
        {
            payload = {
                email:ticket.payload.email,
                id:ticket.payload.sub
            }
            token = await jwt.sign(payload,"secret",{expiresIn: '1d'});
            console.log("TOKEN",token);
            await res.json(token);
        }
        else{
            console.log("No se pudo encontrar usuario");
        }
    }
    catch(e){
        console.log(e)
        console.log("SI imprimior el error")
    }
}