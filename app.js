const express = require('express');
const app = express();
const morgan = require('morgan');
const contenidoRoutes = require('./routes/contenidoRoutes');
const {conectarSQL} = require('./conexion/database.js');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/contenido', contenidoRoutes);


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  conectarSQL();
  console.log(`Server running on port ${PORT}`);
  console.log(new Date());
});