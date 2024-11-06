const Actor = require('../models/actor');
const crearActor = async(req,res)=> {
    try{
        const {nombre_actor} = req.body;
        const actor = await Actor.create({
            nombre_actor
        });
        res.status(201).json(actor);
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

module.exports = {crearActor}