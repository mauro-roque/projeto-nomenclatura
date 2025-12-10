const express = require("express");
const router = express.Router();
const { createNovaCargaController } = require("../controllers/controllers")

router.post("/create/new/carga", async (req, res) => {
    try {
        const { newDSD,
            newProjetoFE,
            newProjetoBE,
            newChave,
            newTipo,
            newObservacao
        } = req.body;

        createNovaCargaController(newDSD, newProjetoFE, newProjetoBE, newChave, newTipo, newObservacao);
        
        return res.json({
            status: "ok",
            message: "Carga gerada com sucesso",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Erro ao atualizar nome da carga"
        });
    }
});

module.exports = router;