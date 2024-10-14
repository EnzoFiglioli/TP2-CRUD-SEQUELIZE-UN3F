// Model for Actor
const {DataTypes} = require('sequelize');
const {sequelize} = require('../conexion/database.js');

const Actor = sequelize.define('Actor',{
    id_actor:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
        unique:true
    },
    nombre: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },
    apellido: {
        type: DataTypes.CHAR(50),
        allowNull: false
    }
},{
    tableName:'Actor',
    timestamps:false
})

module.exports = Actor;