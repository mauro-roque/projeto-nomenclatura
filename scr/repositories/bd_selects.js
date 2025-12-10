const pool = require("../config/db");

async function selectTodosOsDadosCargaPorDSD(dsd_carga) {
  const query = `
    SELECT * FROM descricoesCargas WHERE dsd_carga = ?;
  `;

  try {
    const [result] = await pool.query(query, [dsd_carga]);
    
    if (result.length === 0) {
      return 0;
    }
    return result;
  } catch (err) {
    console.error("Erro ao buscar dados:", err);
    return 0;
  }
}

module.exports = {selectTodosOsDadosCargaPorDSD};