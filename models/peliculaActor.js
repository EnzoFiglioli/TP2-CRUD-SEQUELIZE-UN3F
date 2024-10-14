const {sequelize} = require('../conexion/database.js');
const {DataTypes} = require('sequelize');

const PeliculaActor = sequelize.define('Pelicula_Actor',{
    id_pelicula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Pelicula_Actor',
            key: 'id_pelicula'
        }
    },
    id_actor:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:  true,
        references: {
            model: 'Actor',
            key: 'id_actor'
        }
    }
},{
    tableName:'Pelicula_Actor',
    timestamps: false
});

module.exports = {PeliculaActor};