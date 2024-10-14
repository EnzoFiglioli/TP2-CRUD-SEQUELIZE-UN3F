const {DataTypes} = require('sequelize');
const {sequelize} = require('../conexion/database.js');

const Busqueda = sequelize.define('Busqueda',{
    id_busqueda: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        unique:true,
        autoIncrement:true,
        allowNull:false
    },
    id_pelicula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Pelicula',
            key:'id_pelicula'
        }
    },
    id_genero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'Genero',
            key: 'id_genero'
        }
    },
    id_actor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'Actor',
            key: 'id_actor'
        }
    }
},
{
    tableName:'Busqueda',
    timestamps:false
});

module.exports = Busqueda;