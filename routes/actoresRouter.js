const express = require('express')
const router = express.Router();
const {crearActor} = require("../controllers/actoresController.js")

/**
 * @swagger
 * /crear:
 *   post:
 *     summary: Crea un nuevo actor
 *     description: Endpoint para crear un nuevo actor en la base de datos.
 *     tags: 
 *       - Actores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_actor:
 *                 type: string
 *                 description: Nombre del actor
 *                 example: "Robert Downey Jr."
 *     responses:
 *       201:
 *         description: Actor creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_actor:
 *                   type: integer
 *                   description: ID del nuevo actor
 *                   example: 1
 *                 nombre_actor:
 *                   type: string
 *                   description: Nombre del actor
 *                   example: "Robert Downey Jr."
 *       400:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Faltan datos obligatorios"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Error al crear el actor"
 */
router.post("/crear", crearActor);

module.exports = router;