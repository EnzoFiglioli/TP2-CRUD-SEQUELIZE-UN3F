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

module.exports = {formateadorResponse}