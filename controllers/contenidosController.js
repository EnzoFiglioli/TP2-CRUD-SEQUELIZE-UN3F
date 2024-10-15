const { Contenido } = require("../models/contenido");
const { Genero } = require("../models/genero");
const { Actor } = require("../models/actor");
const { ContenidoActor } = require("../models/contenidoActores");
const { Op } = require("sequelize");
const {GeneroContenido} = require("../models/generosContenido");
const {transformarContenido} = require("../middlewares/transformarContenido");

// Filtrar contenido
const filtrarContenido = async (req, res) => {
    try {
        const { genero, titulo, categoria } = req.query;

        const filterOptions = {
            include: [
                {
                    model: GeneroContenido,
                    include: {
                        model: Genero,
                        attributes: ['nombre_genero']
                    }
                },
                {
                    model: Genero,
                    where: genero ? { nombre_genero: { [Op.eq]: genero } } : undefined,
                    required: true
                },
                {
                    model: ContenidoActor,
                    include: {
                        model: Actor,
                        attributes: ['nombre_actor']
                    }
                }
            ]
        };

        if (titulo) {
            filterOptions.where.titulo = { [Op.like]: `%${titulo}%` };
        }
        if (categoria) {
            filterOptions.where.categoria = { [Op.eq]: categoria };
        }

        const contenidos = await Contenido.findAll(filterOptions);
        const resultado = contenidos.map(transformarContenido);
        if (resultados.length > 0) {
            return res.json(resultado); 
        } else {
            return res.status(404).json({ msg: 'No se encontraron resultados con esos filtros.' });
        }
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

// Obtener todos los contenidos
const obtenerContenidos = async (req, res) => {
    try {
        const contenidos = await Contenido.findAll({
            include: [
                {
                    model: GeneroContenido,
                    include: {
                        model: Genero,
                        attributes: ['nombre_genero']
                    }
                },
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

        // Da una respuesta mas amigable al array de actores
        const resultado = contenidos.map(transformarContenido);
        // Responder con los contenidos transformados
        res.json(resultado);
    } catch (error) {
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
        const resultado = contenidos.map(transformarContenido);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el contenido.' });
    }
};

const eliminarContenido = async(req,res)=>{
    try{
        const {id} = req.params;
        if(id > 0 && !undefined){
            const contenido = await Contenido.findByPk(id);
            if(!contenido) res.status(404).json({msg:'Contenido no encontrado'});
            contenido.destroy();
            res.status(204).send();
        }
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}

// Agregar película
const agregarPelicula = async (req, res) => {
    try {
        const {
            id_contenido,
            titulo,
            poster,
            categoria,
            genero,
            resumen,
            duracion,
            trailer
        } = req.body;

        // Asegúrate de que todos los campos necesarios están presentes
        if (!titulo || !poster || !categoria || !genero || !resumen || !duracion || !trailer) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
        }

        const contenidoNuevo = await Contenido.create({
            id_contenido,
            titulo,
            poster,
            categoria,
            genero,
            resumen,
            duracion,
            trailer
        });
        res.status(201).json(contenidoNuevo);
    } catch (error) {
        res.status(500).json({ error: `Ocurrió un error`, message: `error: ${error.message}` });
    }
}

// Actualizacion de contenidos
const actualizarContenido = async (req, res) => {
    try {
        const { id } = req.params; 
        const datosActualizados = req.body;

        const contenido = await Contenido.findByPk(id);
        
        if (!contenido) {
            return res.status(404).json({ msg: 'Contenido no encontrado.' });
        }

        await contenido.update(datosActualizados);

        res.status(200).json({ msg: 'Contenido actualizado correctamente.', contenido });
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar el contenido.', error: error.message });
    }
};


module.exports = { obtenerContenidos, obtenerPorId, filtrarContenido, eliminarContenido, agregarPelicula, actualizarContenido};
