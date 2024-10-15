const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database.js');

const Actor = sequelize.define('Actor', {
    id_actor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
        nombre_actor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    }, 
    {
    tableName: 'actores',
    timestamps: false,
});

module.exports = {Actor};
