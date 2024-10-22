const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');

const Genero = sequelize.define('Genero', {
    id_genero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_genero: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'genero',
    timestamps: false
});

module.exports = { Genero };
