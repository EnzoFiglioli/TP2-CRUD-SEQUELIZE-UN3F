const { sequelize } = require('sequelize');
const { DataTypes } = require('sequelize');

const Serie = sequelize.define('Serie', {
    id_serie: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    poster: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categoria', // Nombre de la tabla relacionada
            key: 'id_categoria' // Llave foránea
        }
    },
    resumen: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    temporadas: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    trailer: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'Series'
});

module.exports = Serie;
