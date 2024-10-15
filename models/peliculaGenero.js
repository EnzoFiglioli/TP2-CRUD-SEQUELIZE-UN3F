const {DataTypes} = require('sequelize');
const {sequelize} = require('../conexion/database.js');

const PeliculaGenero = sequelize.define("Pelicula_Genero",{
    id_pelicula : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model:'Peliculas',
            key:'id_pelicula'
        }
    },
    id_genero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model:'Genero',
            key:'id_genero'
        }
    },
    es_principal : {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
},
{
    tableName:'Pelicula_Genero',
    timestamps:false
});

module.exports = {PeliculaGenero};