const pool = require("../config/db");

async function test() {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log("Conectado ao MySQL!", rows);
  } catch (err) {
    console.error("Erro ao conectar:", err);
  }
}
test();

module.exports = {test}
