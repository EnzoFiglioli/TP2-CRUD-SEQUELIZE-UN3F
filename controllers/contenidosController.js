const { Contenido } = require("../models/contenido");
const { Genero } = require("../models/genero");
const { Actor } = require("../models/actor");
const { ContenidoActor } = require("../models/contenidoActores");

// Obtener todos los contenidos
const obtenerContenidos = async (req, res) => {
    try {
        const contenidos = await Contenido.findAll({
            include: [
                { model: Genero, attributes: ['nombre_genero'] },
                { 
                    model: ContenidoActor, 
                    include: {
                        model: Actor,
                        attributes: ['nombre_actor']
                    }
                }
            ],
        });
        res.json(contenidos);
    } catch (error) {
        console.error(error);  // Imprimir error en consola
        res.status(500).json({ error: 'Error al obtener los contenidos.' });
    }
};

// Obtener contenido por ID
const obtenerPorId = async (req, res) => {
    try {
      const id = req.params.id;
        const contenido = await Contenido.findByPk(id, {
            include: [
                { model: Genero, attributes: ['nombre_genero'] },
                { 
                    model: ContenidoActor,
                    attributes: [], 
                    include: {
                        model: Actor, attributes: ['nombre_actor']
                    }
                }
            ],
        });

        if (!contenido) {
            return res.status(404).json({ error: 'Contenido no encontrado.' });
        }

        res.json(contenido);
    } catch (error) {
        console.error(error);  // Imprimir error en consola
        res.status(500).json({ error: 'Error al obtener el contenido.' });
    }
};

module.exports = { obtenerContenidos, obtenerPorId };
