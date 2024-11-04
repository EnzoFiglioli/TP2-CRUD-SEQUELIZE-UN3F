function formateadorResponse(data){
    return data.map((i)=>{
        return{
        id_contenido: i.id_contenido,
        titulo: i.titulo,
        resumen: i.resumen,
        categoria: i.Categorium.nombre_categoria,
        genero: i.Genero.nombre_genero,
        actores: i.Actors.map((i) => i.nombre_actor),
    }
    });
}

function formateadorObjeto(data) {
    if (typeof data === 'object' && !Array.isArray(data)) {
        return {
            id_contenido: data.id_contenido,
            titulo: data.titulo,
            resumen: data.resumen,
            categoria: data.Categorium.nombre_categoria,
            genero: data.Genero.nombre_genero,
            actores: data.Actors.map((actor) => actor.nombre_actor),
        };
    }
    return null;
}

module.exports = { formateadorResponse, formateadorObjeto };