const Actor = require('../models/actor');
const crearActor = async(req,res)=> {
    try{
        const {nombre_actor} = req.body;
        const existe = await Actor.findOne({where:{nombre_actor}})
        if(existe) return res.status(400).json({msg:"El actor ya existe"}); // busca si ya existe un actor con ese nombre
        const actor = await Actor.create({
            nombre_actor
        });
        res.status(201).json(actor);
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

module.exports = {crearActor}