const { sequelize } = require('../conexion/database.js');
const { DataTypes } = require('sequelize');

const Series = sequelize.define('Series', {
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
    genero: {
        type:DataTypes.INTEGER,
        defaultValue: 4,
        references:{
            model:'Genero',
            key: 'id_genero'
        }
    },
    categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categoria',
            key: 'id_categoria'
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

module.exports = {Series};
