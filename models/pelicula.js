const {DataTypes} = require('sequelize');
const {sequelize} = require('../conexion/database.js');

const Peliculas = sequelize.define('Peliculas',{
    id_pelicula: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        unique:true,
        autoIncrement:true,
        allowNull:false
    },
    titulo: {
        type: DataTypes.CHAR(100),
        allowNull:false
    },
    poster: {
        type: DataTypes.CHAR(150),
        allowNull: false
    },
    categoria: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'Genero',
            key: 'id_genero'
        }
    },
    resumen: {
        type: DataTypes.CHAR(255),
        allowNull: false
    },
    duracion:{
        type: DataTypes.INTEGER,
        defaultValue: 60
    },
    trailer: {
        type: DataTypes.CHAR(255),
        allowNull: false
    }
},{
    tableName:'Peliculas',
    timestamps: true
});

module.exports = {Peliculas}