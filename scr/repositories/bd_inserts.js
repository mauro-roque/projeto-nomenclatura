const pool = require("../config/db");

async function insertCargaNova(dsdsCarga, projetoFE, projetoBE, chave, tipo, observacao) {
  const query = `
    INSERT INTO descricoesCargas(
      dsd_carga,
      nome_frontEnd,
      nome_backEnd,
      chave_carga,
      tipo_sistema,
      observacoes_carga
    )
    VALUES
    ('${dsdsCarga}', '${projetoFE}', '${projetoBE}', '${chave}', '${tipo}', '${observacao}'); 
 `;

  try {
    await pool.query(query);
    return 1;//sucesso
  } catch (err) {
    console.error(err);
    return 0;//error
  }
}

module.exports = {insertCargaNova};