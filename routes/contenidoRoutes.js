const express = require('express');
const router = express.Router();
const {obtenerContenidos, obtenerPorId} = require('../controllers/contenidosController.js');

router.get('/', obtenerContenidos);
router.get('/:id', obtenerPorId);

module.exports = router;    