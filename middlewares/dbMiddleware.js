const { sequelize } = require('../config/database.js');

async function dbConnection(res,req,next) {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
            .then(() => {console.log('¡Modelos sincronizados con éxito!');})
            .catch((error) => {console.error('Error al sincronizar modelos:', error);});
            next();
        console.log('¡Conexión a la base de datos exitosa!');
    } catch (err) {
        return res.status(502).json({ msg: 'Error al conectarse a la base de datos!', err });
    }
}

module.exports = {dbConnection}