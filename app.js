const ENV = process.env.NODE_ENV || 'local';
require("dotenv").config({path:`.env.${ENV}`});
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.APP_PORT || 3000;

const {dbConnection} = require("./middlewares/dbMiddleware.js");
const contenidosRoutes = require("./routes/contenidoRoutes.js");
const actoresRoutes = require("./routes/actoresRouter.js")
const homeRoute = require("./routes/homeRoute.js");
const {swaggerDocs,swaggerUI} = require("./utils/swagger.config.js");

// Middlewares
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(express.json());
app.use(morgan('dev'));
app.use(dbConnection);
const corsOptions = {
    origin: [
        `http://localhost:${port}`,
        'https://tp2-crud-sequelize-un3f-production.up.railway.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
}
app.use(cors(corsOptions));

//Rutas
app.use("/",homeRoute);
app.use("/contenidos", contenidosRoutes);
app.use("/actores",actoresRoutes);
app.use((req,res)=>{
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Docuentación de la API en http://localhost:${port}/docs`)
})

module.exports = {express}