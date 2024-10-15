const express = require('express');
const app = express();
const morgan = require('morgan');
const contenidoRoutes = require('./routes/contenidoRoutes');
const { sequelize } = require('./conexion/database.js');
const PORT = process.env.PORT || 3000;

// MODELOS
const { Peliculas } = require('./models/pelicula.js');
const { Series } = require('./models/serie.js');
const { Genero } = require('./models/genero.js');
const { Categoria } = require('./models/categoria.js');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Verificación de conexión a la base de datos
app.use(async function(req, res, next) {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('¡Conexión a la base de datos exitosa!');
    next();
  } catch (err) {
    return res.status(502).json({ msg: 'Error al conectarse a la base de datos!', err });
  }
});

// Pelis y series
app.get("/contenidos", async (req, res) => {
  try {
    
    const peliculas = await Peliculas.findAll({});
    const series = await Series.findAll();
    if (peliculas.length > 0 || series.length > 0) return res.json({peliculas,series});
    res.status(404).json({msg:'No se encontró contenido =/'});

  } catch (err) {

    return res.status(500).json({ msg: 'Error en el servidor', error: err });
  }
});

// Pelicula por id
app.get("/contenidos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (id <= 0) return res.status(400).json({ msg: 'El id debe ser mayor a 0' });

    const peli = await Peliculas.findByPk(id);
    const serie = await Series.findByPk(id);
    if (peli || serie) return res.json({peli, serie});

    return res.status(404).json({ msg: `No se encontró pelicula con el id ${id}` });
  } catch (err) {
    return res.status(500).json({ msg: 'Error en el servidor', error: err.message });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(new Date());
});