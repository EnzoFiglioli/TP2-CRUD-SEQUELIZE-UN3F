const {Sequelize} = require("sequelize");
const dotenv = require("dotenv");
const ENV = process.env.NODE_ENV || 'local';
dotenv.config({path:`.env.${ENV}`});

const {DATABASE, DBUSER, PASSWORD, HOST} = process.env;

const sequelize = new Sequelize(DATABASE,DBUSER,PASSWORD,{
    host:HOST,
    dialect:'mysql'
});
module.exports = {sequelize}