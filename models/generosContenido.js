const { sequelize } = require("../config/database.js");
const { DataTypes } = require("sequelize");
const { Genero } = require("./genero.js");
const { Contenido } = require("./contenido");

const GeneroContenido = sequelize.define('GeneroContenido', {
    id_genero_contenido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_contenido: {
        type: DataTypes.INTEGER,
        references: {
            model: Contenido, 
            key: 'id_contenido',
        }
    },
    id_genero: {
        type: DataTypes.INTEGER,
        references: {
            model: Genero,
            key: 'id_genero',
        }
    },
}, {
    tableName: 'genero_contenido',
    timestamps: false,
});

Contenido.hasMany(GeneroContenido, { foreignKey: 'id_contenido' });
GeneroContenido.belongsTo(Contenido, { foreignKey: 'id_contenido' });
GeneroContenido.belongsTo(Genero, { foreignKey: 'id_genero' }); 
Genero.hasMany(GeneroContenido, { foreignKey: 'id_genero' });

module.exports = { GeneroContenido };
