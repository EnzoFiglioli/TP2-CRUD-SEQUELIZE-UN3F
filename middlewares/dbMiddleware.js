const { sequelize } = require('../config/database.js');

async function dbConnection(req,res,next) {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
            .then(() => {
                console.log('¡Modelos sincronizados con éxito!');
            })
            .catch((error) => {
                console.error('Error al sincronizar modelos:', error);
            });
        console.log('¡Conexión a la base de datos exitosa!');
        next();
    } catch (err) {
        return res.status(502).json({ msg: 'Error al conectarse a la base de datos!', err });
    }
}

module.exports = {dbConnection}