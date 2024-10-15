const { app } = require("../app");
const {Actor} = require("./models/actor.js")
const {Pelicula} = require("../models/pelicula.js")

app.use(async function(req,res,next){
    try{
        await sequelize.authenticate();
        console.log('¡Conexion a la base de datos exitosa!');
        next();
    }catch(err){
        console.log('Error al conectarse a la base de datos!', err);
    }
});