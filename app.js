const express = require('express');
const app = express();
const morgan = require('morgan');
const { sequelize } = require('./config/database.js');
const contenidosRoutes = require("./routes/contenidoRoutes.js");
const { GeneroContenido } = require('./models/generosContenido.js');
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Verificación de conexión a la base de datos
app.use(async function(req, res, next) {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await GeneroContenido.sync();
    console.log('¡Conexión a la base de datos exitosa!');
    next();
  } catch (err) {
    return res.status(502).json({ msg: 'Error al conectarse a la base de datos!', err });
  }
});

//Rutas
app.use("/contenidos",contenidosRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(new Date());
});