process.loadEnvFile();
const {Sequelize} = require("sequelize");

const {DATABASE, DBUSER, PASSWORD, HOST} = process.env;

const sequelize = new Sequelize(DATABASE,DBUSER,PASSWORD,{
    host:HOST,
    dialect:'mysql'
});

// Conexion a la base de datos 
const conectarSQL = async (req,res,next)=> {
    try{
        return await sequelize.authenticate();
    }catch{
        res.json({msg:'Error al conectarse a la base de datos'})
    }
}

module.exports = {sequelize, conectarSQL}