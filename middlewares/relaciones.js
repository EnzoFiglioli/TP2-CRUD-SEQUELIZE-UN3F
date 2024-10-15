const {Contenido} = require('../models/contenido.js');
const {Genero} = require('../models/genero.js');
const {Actor} = require('../models/actor.js');
const {ContenidoActor} = require('../models/contenidoActores.js');

Actor.belongsToMany(Contenido, { through: ContenidoActor, foreignKey: 'id_actor' });

module.exports = { Contenido, Genero, Actor, ContenidoActor };
