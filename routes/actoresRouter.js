const express = require('express')
const router = express.Router();
const {crearActor} = require("../controllers/actoresController.js")

router.post("/crear",crearActor);

module.exports = router;