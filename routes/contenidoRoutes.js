const express = require('express');
const router = express.Router();
const {
        obtenerContenidos, 
            obtenerPorId, 
            filtrarContenido, 
            // eliminarContenido, 
            agregarPelicula, 
            // actualizarContenido
        } = require('../controllers/contenidosController.js');

router.get('/', obtenerContenidos);
router.get("/query",filtrarContenido);
router.get('/:id', obtenerPorId);
// router.delete('/:id',eliminarContenido);
router.post('/',agregarPelicula);
// router.patch("/update/:id",actualizarContenido);

module.exports = router;