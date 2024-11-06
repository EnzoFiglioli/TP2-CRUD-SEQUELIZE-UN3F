const {Sequelize} = require("sequelize");
const dotenv = require("dotenv");
const ENV = process.env.NODE_ENV || 'local';
dotenv.config({path:`.env.${ENV}`});

const {DATABASE, DBUSER, PASSWORD, HOST} = process.env;

const sequelize = new Sequelize(DATABASE,DBUSER,PASSWORD,{
    host:HOST,
    dialect:'mysql',
    port: process.env.PORT || 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        connectTimeout: 60000
    }
});
module.exports = {sequelize}