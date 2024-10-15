const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database.js');

const Genero = sequelize.define('Genero',{
    id_genero:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        unique: true,
        primaryKey: true
    },
    nombre_genero: {
        type:DataTypes.CHAR(20),
        allowNull:false
    }
},
{
    tableName:'Genero',
    timestamps:false
})

module.exports = {Genero};