const {sequelize} = require('../conexion/database.js');
const {DataTypes } = require('sequelize');

const ListaPeliculas = sequelize.define('ListaPeliculas',{
    id_listaPelicula: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'Usuario',
            key: 'id_usuario'
        }
    },
    id_pelicula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Pelicula',
            key: 'id_pelicula'
        }
    }
});

module.exports = {ListaPeliculas};