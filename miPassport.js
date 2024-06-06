const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
const models = require("./models");
const { where } = require('sequelize');
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log(jwt_payload);
    console.log("Si entro");
    let usuario =  models.Identificador.findOne({
        where: {
            email:jwt_payload.email
        }}
    ).then(()=>{
        console.log("SI encontro el usuario")
        if (jwt_payload.email == "luis.nunez25@uabc.edu.mx") {
        return done(null, jwt_payload.email);
    }
    else {
        return done(null, false);
    }})
    //falta ponerle algo como 
    /*
    usuario = models.identificador.email where jwt.payload.email
    if usuario != undifiend
    return null, jwt_pay... bla bla
    */
    
}));

module.exports = passport;