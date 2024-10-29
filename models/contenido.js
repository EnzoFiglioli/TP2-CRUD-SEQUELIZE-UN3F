const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.js");
const { Genero } = require("./genero.js");
const { Categoria } = require("./categoria.js");

const Contenido = sequelize.define('Contenido', {
    id_contenido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: 'id_categoria'
        }
    },
    genero: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Genero,  
            key: 'id_genero'  
        }
    },
    resumen: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    temporadas: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true,
        }
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    trailer: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Contenido',
    tableName: 'contenido',
    timestamps: true
});

// Relaciones
Contenido.belongsTo(Categoria, { foreignKey: 'categoria' });
Categoria.hasMany(Contenido, { foreignKey: 'categoria' });

Contenido.belongsTo(Genero, { foreignKey: 'genero' });
Genero.hasMany(Contenido, { foreignKey: 'genero' });

module.exports = { Contenido };
