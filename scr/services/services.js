const { deleteDadosPorDSD } = require("../repositories/bd_delete")
const { insertCargaNova } = require("../repositories/bd_inserts")
const { selectTodosOsDadosCargaPorDSD } = require("../repositories/bd_selects")
const {updateNomeCargaFE,
     updateNomeCargaBE,
     updateNomeCargaChaveProjeto,
     updateNomeCargaTipoSistema, 
     updateNomeCargaObservacao} = require("../repositories/bd_update")

//DELETE por DSD;
async function deleteDadosPassandoDSD(dsd) {
     let resultado = await deleteDadosPorDSD(dsd);
     if(resultado == 1){
          console.log("Dados deletados com sucesso - "+dsd);
     }else if (resultado == 0){
          console.log("Error - deletador os dados deleteDadosPassandoDSD");
     }
     process.exit();
}

//CREAT New Carga;
async function createDadosCargaNova(dsdsCarga, projetoFE, projetoBE, chave, tipo, observacao) {
     const resultado = await insertCargaNova(dsdsCarga, projetoFE, projetoBE, chave, tipo, observacao);
     if(resultado == 1){
          console.log("Dados inseridos com sucesso - "+dsdsCarga);
     }else if (resultado == 0){
           console.log("Error inserir os dados createDadosCargaNova");
     }
     process.exit();
}

//SELECT por DSD;
async function buscaTodosOsDadosCargaDSD(dsd) {
     let data = await selectTodosOsDadosCargaPorDSD(dsd)
     .then(results => {
          return results;
     });

     if(data == 0){
          console.log("Nenhum dado encontrado com este dsd - "+dsdsCarga);
     }else{
          return data
     }
     process.exit();
}

//UPDATE Name Front-end;
async function updateNomeProjetoFE(id_carga, newName) {
     const resultado = await updateNomeCargaFE(id_carga, newName)
     if(resultado == 1){
          console.log("Registro atualizado com sucesso - Nome da carga FE");
     }else if(resultado == 0){
          console.log("Nenhum registro encontrado com esse ID.");
     }
     process.exit();
}

//UPDATE Name Back-end;
async function updateNomeProjetoBE(id_carga, newName) {
     const resultado = await updateNomeCargaBE(id_carga, newName)
     if(resultado == 1){
          console.log("Registro atualizado com sucesso - Nome da carga BE");
     }else if(resultado == 0){
          console.log("Nenhum registro encontrado com esse ID.");
     }
     process.exit();
}

//UPDATE Chave do projeto;
async function updateChaveProjeto(id_carga, newName) {
     const resultado = await updateNomeCargaChaveProjeto(id_carga, newName)
     if(resultado == 1){
          console.log("Registro atualizado com sucesso - Chave do projeto");
     }else if(resultado == 0){
          console.log("Nenhum registro encontrado com esse ID.");
     }
     process.exit();
}

//UPDATE Tipo do sistema;
async function updateTipoSistema(id_carga, newName) {
     const resultado = await updateNomeCargaTipoSistema(id_carga, newName)
     if(resultado == 1){
          console.log("Registro atualizado com sucesso - Tipo do sistema");
     }else if(resultado == 0){
          console.log("Nenhum registro encontrado com esse ID.");
     }
     process.exit();
}

//UPDATE Observações;
async function updateObservacoesCarga(id_carga, newName) {
     const resultado = await updateNomeCargaObservacao(id_carga, newName)
     if(resultado == 1){
          console.log("Registro atualizado com sucesso - Observaçoes");
     }else if(resultado == 0){
          console.log("Nenhum registro encontrado com esse ID.");
     }
     process.exit();
}

module.exports = {
     deleteDadosPassandoDSD,
     createDadosCargaNova,
     buscaTodosOsDadosCargaDSD,
     updateNomeProjetoFE,
     updateNomeProjetoBE,
     updateChaveProjeto,
     updateTipoSistema,
     updateObservacoesCarga,
}