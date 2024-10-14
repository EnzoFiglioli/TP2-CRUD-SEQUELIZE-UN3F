const {DataTypes} = require('sequelize');
const {sequelize} = require('../conexion/database.js');

const Categoria  = sequelize.define('Categoria',{
    id_categoria: {
        type:DataTypes.INTEGER,
        unique:true,
        primaryKey:true,
        allowNull:false
    },
    nombre_categoria: {
        type: DataTypes.CHAR(100),
        allowNull: false
    },
},{
    tableName:'Categoria',
    timestamps:false
})

module.exports = {Categoria}