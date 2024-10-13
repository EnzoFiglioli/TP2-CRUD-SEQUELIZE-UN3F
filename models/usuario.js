const {sequelize} = require("../conexion/database.js");
const {DataTypes} = require("sequelize");

const Usuario = sequelize.define('Usuario',{
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey:true
    },
    email: {
        type: DataTypes.CHAR(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.CHAR(255),
        allowNull: false
    }
});

module.exports = Usuario;