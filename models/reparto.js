const { sequelize } = require("../config/database.js");
const { DataTypes } = require("sequelize");

const Reparto = sequelize.define('Reparto', {
    id_reparto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_contenido: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Contenido',
            key: 'id_contenido'
        }
    },
    id_actor: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Actor',
            key: 'id_actor'
        }
    }
}, {
    tableName: 'repartos',
    timestamps: false
});

module.exports = { Reparto };
