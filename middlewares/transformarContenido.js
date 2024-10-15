const transformarContenido = (contenido) => ({
    id_contenido: contenido.id_contenido,
    poster: contenido.poster,
    titulo: contenido.titulo,
    categoria: contenido.categoria,
    resumen: contenido.resumen,
    temporadas: contenido.temporadas,
    duracion: contenido.duracion,
    trailer: contenido.trailer,
    genero: contenido.Genero ? contenido.Genero.nombre_genero : null,
    actores: contenido.ContenidoActors.map(contenidoActor => contenidoActor.Actor.nombre_actor),
    generos: contenido.GeneroContenido ? contenido.GeneroContenido.map(contenidoGenero => contenidoGenero.Genero.nombre_genero) : []
});

module.exports = {transformarContenido}