const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Trabajo práctico integrado n°2 - CRUD con Sequelize',
            version: '1.0.0',
            description:"API de películas y series desarrollada con Sequelize para el trabajo práctico integrador n°2de la diplomatura desarrollador web backend.",
        },
        servers: [
            {
                url: 'http://localhost:8080',
                url: 'https://tp2-crud-sequelize-un3f-production.up.railway.app/'
            },
        ],
        components: {
            schemas: {
                Actor: {
                    type: 'object',
                    properties: {
                        id_actor: {
                            type: 'integer',
                            description: 'ID único del actor',
                            example: 1,
                        },
                        nombre_actor: {
                            type: 'string',
                            description: 'Nombre y apellido del actor',
                            example: 'Pedro Pascal',
                        },
                    },
                    required: ['id_actor', 'nombre_actor'],
                },
                Categoria: {
                    type: 'object',
                    properties: {
                        id_categoria: {
                            type: 'integer',
                            description: 'ID único de la categoría',
                            example: 1,
                        },
                        nombre_categoria: {
                            type: 'string',
                            description: 'Nombre de la categoría',
                            example: 'Drama',
                        },
                    },
                    required: ['id_categoria', 'nombre_categoria'],
                },
                Genero: {
                    type: 'object',
                    properties: {
                        id_genero: {
                            type: 'integer',
                            description: 'ID único del género',
                            example: 1,
                        },
                        nombre_genero: {
                            type: 'string',
                            description: 'Nombre del género',
                            example: 'Acción',
                        },
                    },
                    required: ['id_genero', 'nombre_genero'],
                },
                Contenido: {
                    type: 'object',
                    properties: {
                        id_contenido: {
                            type: 'integer',
                            description: 'ID único del contenido',
                            example: 100,
                        },
                        poster: {
                            type: 'string',
                            description: 'URL de la imagen del póster del contenido',
                            example: './posters/70.jpg',
                        },
                        titulo: {
                            type: 'string',
                            description: 'Título del contenido',
                            example: 'Memento',
                        },
                        categoria: {
                            type: 'integer',
                            description: 'ID de la categoría asociada',
                            example: 2,
                        },
                        genero: {
                            type: 'integer',
                            description: 'ID del género asociado',
                            example: 2,
                        },
                        resumen: {
                            type: 'string',
                            description: 'Resumen o sinopsis del contenido',
                            example: 'En un futuro cercano, Theodore, un hombre solitario a punto de divorciarse que trabaja en una empresa como escritor de cartas para terceras personas, compra un día un nuevo sistema operativo basado en el modelo de Inteligencia Artificial, diseñado para satisfacer todas las necesidades del usuario. Para su sorpresa, se crea una relación romántica entre él y Samantha, la voz femenina de ese sistema operativo.',
                        },
                        temporadas: {
                            type: 'integer',
                            description: 'Número de temporadas (para series)',
                            example: 'null',
                        },
                        duracion: {
                            type: 'integer',
                            description: 'Duración del contenido (para películas)',
                            example: 126
                        },
                        trailer: {
                            type: 'string',
                            description: 'URL del tráiler del contenido',
                            example: 'https://www.youtube.com/embed/UVMcpZ42BkA',
                        },
                    },
                    required: ['poster', 'titulo', 'categoria', 'resumen', 'trailer'],
                },
                ContenidoActores: {
                    type: 'object',
                    properties: {
                        id_reparto: {
                            type: 'integer',
                            description: 'ID único del reparto',
                            example: 1,
                        },
                        id_contenido: {
                            type: 'integer',
                            description: 'ID del contenido asociado',
                            example: 2,
                        },
                        id_actor: {
                            type: 'integer',
                            description: 'ID del actor asociado',
                            example: 3,
                        },
                    },
                    required: ['id_reparto', 'id_contenido', 'id_actor'],
                },
            },
        },
    },
    apis: ['./routes/contenidoRoutes.js'], 
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUI };
