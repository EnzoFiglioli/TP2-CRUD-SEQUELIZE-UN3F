const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const { Genero } = require("./genero");

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
        type: DataTypes.ENUM('Pelicula', 'Serie'), 
        allowNull: false,
        defaultValue: 'Pelicula', 
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
        allowNull: true, 
    },
    trailer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Contenido',
    tableName: 'contenidos',
    timestamps: false
});

Contenido.belongsTo(Genero, { foreignKey: 'genero' });
module.exports = { Contenido };
