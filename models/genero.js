const {DataTypes} = require('sequelize');
const {sequelize} = require('../conexion/database.js');

const Genero = sequelize.define('Genero',{
    id_genero:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        unique: true,
        primaryKey: true
    }
})

module.exports = Genero;