const express = require("express");
const router = express.Router();
const { deleteDadosPassandoDsdController } = require("../controllers/controllers")

router.put("/delete_por_dsd/:dsd", (req, res) => {
    const dsd = req.params.dsd;
    deleteDadosPassandoDsdController(dsd);
    res.send("Registros excluidos com sucesso");
});

module.exports = router;