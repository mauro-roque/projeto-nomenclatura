const pool = require("../config/db");

async function updateNomeCargaFE(id_carga, newName) {
  const query = `
    UPDATE descricoesCargas SET 
      nome_frontEnd = ?
    WHERE dsd_carga = ?;
  `;

  try {
    const [result] = await pool.query(query, [newName, id_carga]);
    if (result.affectedRows === 0) {
      return 0;
    } else {
      return 1;
    }

  } catch (err) {
    console.error("Erro ao atualizar dados:", err);
  }
}

async function updateNomeCargaBE(id_carga, newName) {
  const query = `
    UPDATE descricoesCargas SET 
      nome_backEnd = ?
    WHERE dsd_carga = ?;
  `;

  try {
    const [result] = await pool.query(query, [newName, id_carga]);

    if (result.affectedRows === 0) {
      return 0;
    } else {
      return 1;
    }

  } catch (err) {
    console.error("Erro ao atualizar dados:", err);
  }
}

async function updateNomeCargaChaveProjeto(id_carga, newChave) {
  const query = `
    UPDATE descricoesCargas SET 
      chave_carga = ?
    WHERE dsd_carga = ?;
  `;

  try {
    const [result] = await pool.query(query, [newChave, id_carga]);

    if (result.affectedRows === 0) {
      return 0
    } else {
      return 1;
    }

  } catch (err) {
    console.error("Erro ao atualizar dados:", err);
  }
}

async function updateNomeCargaTipoSistema(id_carga, tipoSistema) {
  const query = `
    UPDATE descricoesCargas SET 
      tipo_sistema = ?
    WHERE dsd_carga = ?;
  `;

  try {
    const [result] = await pool.query(query, [tipoSistema, id_carga]);

    if (result.affectedRows === 0) {
      return 0;
    } else {
      return 1;
    }

  } catch (err) {
    console.error("Erro ao atualizar dados:", err);
  }
}

async function updateNomeCargaObservacao(id_carga, newObservacao) {
  const query = `
    UPDATE descricoesCargas SET 
      observacoes_carga = ?
    WHERE dsd_carga = ?;
  `;

  try {
    const [result] = await pool.query(query, [newObservacao, id_carga]);

    if (result.affectedRows === 0) {
      return 0;
    } else {
      return 1;
    }

  } catch (err) {
    console.error("Erro ao atualizar dados:", err);
  }
}

module.exports = {
  updateNomeCargaFE,
  updateNomeCargaBE,
  updateNomeCargaChaveProjeto,
  updateNomeCargaTipoSistema,
  updateNomeCargaObservacao,
}