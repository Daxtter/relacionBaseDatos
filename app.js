
let express =  require('express');
const pasaport = require("./miPassport.js");
const activo = require( "./Routes/activos.js");
const acceso = require( "./Routes/acceso.js");
const activoConTag = require( "./Routes/activoConTag.js");
const identificador = require( "./Routes/identificador.js");
const responsable = require( "./Routes/responsable.js");
const tag = require( "./Routes/tag.js");
const ubicacion = require( "./Routes/ubicacion.js");
const usuarios = require("./Routes/usuarios.js")
const login =require("./login.js");
const https = require('https');
const fs = require('fs');
const cors = require( 'cors' );

const llavePrivada = fs.readFileSync("server.key");
const certificado = fs.readFileSync("server.cer")
const credenciales = {
    key:llavePrivada,
    cert: certificado
    //No use contraseña 
}



const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login",login.login); // Para el login 

app.use(pasaport.authenticate('jwt',{session: false}));


app.use("/activos",activo);
app.use("/accesos",acceso);
app.use("/activoContags",activoConTag);
app.use("/identificadores",identificador);
app.use("/responsables",responsable);
app.use("/tags",tag);
app.use("/ubicaciones",ubicacion);
app.use("/usuarios",usuarios);
app.get("/pasaporte", (req, res) => {
    res.end("Hola Usuario Autenticado");
});


/*
app.get("/activo",activo.findAll);
app.get("/activo/:id",activo.findById);
app.post("/activo/",activo.post);
app.put("/activo/:id",activo.put)
app.delete("/activo/:id",activo.deleteId)
*/
/*
app.get("/activo/:id",(req,res)=>{
    console.log(req.params.id);
});
*/
process.env.port = 4005;
const httpsServer = https.createServer(credenciales,app);
httpsServer.listen(process.env.port,()=>{
    console.log("Servidor https escuchando puerto: ", process.env.port);
}).on('Error',err=>{
    console.log("Error al iniciar servidor",err);
})
