const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');
const { Contenido } = require('./contenido.js');
const { Actor } = require('./actor.js');

const ContenidoActores = sequelize.define('ContenidoActores', {
    id_reparto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_contenido: {
        type: DataTypes.INTEGER,
        references: {
            model: Contenido,
            key: 'id_contenido'
        }
    },
    id_actor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Actor,
            key: 'id_actor'
        }
    }
}, {
    tableName: 'contenido_actores',
    timestamps: false,
});

Contenido.belongsToMany(Actor, { through: ContenidoActores, foreignKey: 'id_contenido' });
Actor.belongsToMany(Contenido, { through: ContenidoActores, foreignKey: 'id_actor' });

module.exports = { ContenidoActores };
