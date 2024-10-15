const express = require('express');
const router = express.Router();
const {obtenerContenidos, obtenerPorId, filtrarContenido, eliminarContenido, agregarPelicula} = require('../controllers/contenidosController.js');

router.get("/query",filtrarContenido);
router.get('/', obtenerContenidos);
router.get('/:id', obtenerPorId);
router.delete('/:id',eliminarContenido);
router.post('/',agregarPelicula);
module.exports = router;    