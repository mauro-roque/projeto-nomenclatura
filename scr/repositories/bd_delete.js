const pool = require("../config/db");

/**Por motivos de segurança: A linha não e excluida, e setado Null em alguns registros*/
async function deleteDadosPorDSD(id_dsd) {
  const query = `
    UPDATE descricoesCargas SET 
      nome_frontEnd = NULL,
      nome_backEnd = NULL,
      chave_carga = NULL,
      tipo_sistema = NULL,
      observacoes_carga = NULL
      WHERE dsd_carga = ?;
  `;

  try {
    const [result] = await pool.query(query, [id_dsd]);

    if (result.affectedRows === 0) {
      return 0;
    } else {
      return 1;
    }
  } catch (err) {
    console.error("Erro ao atualizar dados:", err);
  }
}

module.exports = {deleteDadosPorDSD};