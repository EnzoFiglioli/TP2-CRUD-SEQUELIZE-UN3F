process.loadEnvFile();
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

const {dbConnection} = require("./middlewares/dbMiddleware.js")
const contenidosRoutes = require("./routes/contenidoRoutes.js");

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(dbConnection);

//Rutas
app.use("/contenidos", contenidosRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(new Date());
})