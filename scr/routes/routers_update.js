const express = require("express");
const router = express.Router();

const { 
    updateChaveProjetoController,
    updateNomeProjetoBEController,
    updateNomeProjetoFEController,
    updateObservacoesCargaController,
    updateTipoSistemaController
} = require("../controllers/controllers");

//UPDATE Name Front-end;
router.put("/update/name/carga_fe/:dsd", async (req, res) => {
    try {
        const dsd = req.params.dsd;
        const { newName } = req.body;
        updateNomeProjetoFEController(dsd, newName);
        
        return res.json({
            status: "ok",
            message: "Nome FE da carga atualizado com sucesso",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Erro ao atualizar nome da carga"
        });
    }
});

//UPDATE Name Back-end;
router.put("/update/name/carga_be/:dsd", async (req, res) => {
    try {
        const dsd = req.params.dsd;
        const { newName } = req.body;
        updateNomeProjetoBEController(dsd, newName);
        
        return res.json({
            status: "ok",
            message: "Nome BE da carga atualizado com sucesso",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Erro ao atualizar nome da carga"
        });
    }
});

//UPDATE Chave do projeto;
router.put("/update/name/chave/:dsd", async (req, res) => {
    try {
        const dsd = req.params.dsd;
        const { newName } = req.body;
        updateChaveProjetoController(dsd, newName);
        
        return res.json({
            status: "ok",
            message: "Chave da carga atualizado com sucesso",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Erro ao atualizar nome da carga"
        });
    }
});

//UPDATE Observações;
router.put("/update/name/observacoes/:dsd", async (req, res) => {
    try {
        const dsd = req.params.dsd;
        const { newName } = req.body;
        updateObservacoesCargaController(dsd, newName);
        
        return res.json({
            status: "ok",
            message: "Observações da carga atualizado com sucesso",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Erro ao atualizar nome da carga"
        });
    }
});

//UPDATE Tipo do sistema;
router.put("/update/name/tipo/:dsd", async (req, res) => {
    try {
        const dsd = req.params.dsd;
        const { newName } = req.body;
        updateTipoSistemaController(dsd, newName);
        
        return res.json({
            status: "ok",
            message: "Observações da carga atualizado com sucesso",
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