const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        home: "Bienvenidos a trailerflix!!",
        routes: [
            "/contenidos",
            "/actores",
            "/docs"
        ]
    });
});

module.exports = router;