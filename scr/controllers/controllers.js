const {
    buscaTodosOsDadosCargaDSD,
    createDadosCargaNova,
    deleteDadosPassandoDSD,
    updateChaveProjeto,
    updateNomeProjetoBE,
    updateNomeProjetoFE,
    updateObservacoesCarga,
    updateTipoSistema
} = require("../services/services");

function buscarPorDadosDsdController(dsd) {
    return buscaTodosOsDadosCargaDSD(dsd).then((data) => {return data})
}

function createNovaCargaController(dsdsCarga, projetoFE, projetoBE, chave, tipo, observacao){
    createDadosCargaNova(dsdsCarga, projetoFE, projetoBE, chave, tipo, observacao);
}

function deleteDadosPassandoDsdController(dsd){
    deleteDadosPassandoDSD(dsd);
}

function updateChaveProjetoController(id_carga, newName){
    updateChaveProjeto(id_carga, newName);
}

function updateNomeProjetoBEController(id_carga, newName){
    updateNomeProjetoBE(id_carga, newName);
}

function updateNomeProjetoFEController(id_carga, newName){
    updateNomeProjetoFE(id_carga, newName);
}

function updateObservacoesCargaController(id_carga, newName){
    updateObservacoesCarga(id_carga, newName);
}

function updateTipoSistemaController(id_carga, newName){
    updateTipoSistema(id_carga, newName);
}

module.exports = {
    buscarPorDadosDsdController,
    createNovaCargaController,
    deleteDadosPassandoDsdController,
    updateChaveProjetoController,
    updateNomeProjetoBEController,
    updateNomeProjetoFEController,
    updateObservacoesCargaController,
    updateTipoSistemaController
}

/* Teste de todas as rotas:
 * buscarPorDadosDsdController("DSD0001").then((e) => {console.log(e)});
 * createNovaCargaController("DSD0050", "ProjetoTesteFE", "ProjetoTesteBE", "8787", "Transmissao", "Em funcionamento"); - OK
 * deleteDadosPassandoDsdController("DSD0050"); - OK
 * updateChaveProjetoController("DSD0001", "4545"); - OK
 * updateNomeProjetoBEController("DSD0001", "TesteProjeB");
 * updateNomeProjetoFEController("DSD0001", "TesteProjeF");
 * updateObservacoesCargaController("DSD0001", "Funcionamento");
 * updateTipoSistemaController("DSD0001", "Airbag");*/

