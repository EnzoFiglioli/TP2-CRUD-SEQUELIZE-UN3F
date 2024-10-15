const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { Contenido } = require('./contenido');
const { Actor } = require('./actor');

const ContenidoActor = sequelize.define('ContenidoActor', {
    id_contenido_actor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_contenido: {
        type: DataTypes.INTEGER,
        allowNull: false,
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

// Definición de relaciones
Contenido.hasMany(ContenidoActor, { foreignKey: 'id_contenido' });
ContenidoActor.belongsTo(Contenido, { foreignKey: 'id_contenido' });
ContenidoActor.belongsTo(Actor, { foreignKey: 'id_actor' }); 
Actor.hasMany(ContenidoActor, { foreignKey: 'id_contenido' });

module.exports = { ContenidoActor };
