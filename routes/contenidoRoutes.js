const express = require('express');
const router = express.Router();
const {
    obtenerContenidos, 
    obtenerPorId, 
    filtrarContenido, 
    agregarPelicula,
} = require('../controllers/contenidosController.js');

/**
 * @swagger
 * /contenidos:
 *   get:
 *     summary: Obtener todos los contenidos
 *     description: Endpoint para obtener una lista de los contenidos en la base de datos
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve una lista de contenidos ordenados por índice.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contenido'
 */
router.get('/', obtenerContenidos);

/**
 * @swagger
 * /contenidos/query:
 *   get:
 *     summary: Filtrar contenidos
 *     description: Endpoint para filtrar contenidos según parámetros específicos.
 *     responses:
 *       200:
 *         description: Respuesta exitosa con los contenidos filtrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contenido'
 */
router.get("/query", filtrarContenido);

/**
 * @swagger
 * /contenidos/{id}:
 *   get:
 *     summary: Obtener contenido por ID
 *     description: Endpoint para obtener un contenido específico por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido
 *     responses:
 *       200:
 *         description: Contenido encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contenido'
 *       404:
 *         description: Contenido no encontrado.
 */
router.get('/:id', obtenerPorId);

/**
 * @swagger
 * /contenidos:
 *   post:
 *     summary: Agregar una nueva película
 *     description: Endpoint para agregar una nueva película al sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contenido'
 *     responses:
 *       201:
 *         description: Película agregada exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.post('/', agregarPelicula);

module.exports = router;
