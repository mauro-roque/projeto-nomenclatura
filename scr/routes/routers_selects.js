const express = require("express");
const router = express.Router();
const { buscarPorDadosDsdController } = require("../controllers/controllers")

router.get("/consultar_from_cargas/:dsdCarga", (req, res) => {
    const id = req.params.dsdCarga;
    buscarPorDadosDsdController(id)
    .then((data) => {
        res.send(data)
    })
});

module.exports = router;