require("dotenv").config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;

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

module.exports = {port, express}