const express = require('express');
const router = express.Router();
const {
    obtenerContenidos, 
    obtenerPorId, 
    filtrarContenido, 
    agregarContenido,
    eliminarContenido,
    actualizarContenido,
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
 *     summary: Filtrar contenidos por género
 *     description: Endpoint para filtrar contenidos según el género especificado.
 *     parameters:
 *       - in: query
 *         name: genero
 *         schema:
 *           type: string
 *         description: Género del contenido a filtrar
 *       - in: query
 *         name: categoria
 *         schema:
 *           type: string
 *         description: Categoria del contenido a filtrar
 *       - in: query
 *         name: titulo
 *         schema:
 *           type: string
 *         description: Titulo del contenido a filtrar
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
router.get('/query', filtrarContenido);

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
 *     summary: Agregar una nueva película o serie
 *     description: Endpoint para agregar un nuevo contenido al sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contenido'
 *     responses:
 *       201:
 *         description: Contenido agregado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.post('/', agregarContenido);

/**
 * @swagger
 * /contenidos/eliminar/{id}:
 *   delete:
 *     summary: Eliminar un contenido
 *     description: Endpoint para eliminar un contenido de nuestra base de datos.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido
 *     responses:
 *       201:
 *         description: Contenido eliminado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.delete('/eliminar/:id', eliminarContenido);

/**
 * @swagger
 * /contenidos/actualizar/{id}:
 *   patch:
 *     summary: Actualizar un contenido
 *     description: Actualiza los datos de un contenido en la base de datos según el ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido que se desea actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contenido'
 *     responses:
 *       200:
 *         description: Contenido actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Contenido actualizado correctamente.
 *                 contenido:
 *                   $ref: '#/components/schemas/Contenido'
 *       400:
 *         description: Solicitud incorrecta, datos inválidos.
 *       404:
 *         description: Contenido no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.patch('/actualizar/:id', actualizarContenido);
router.use((req,res)=>{
    res.status(404).json({ error: 'Contenido no encontrado' });
});

module.exports = router;
