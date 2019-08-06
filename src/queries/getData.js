const dbConnection = require("../database/db_connection.js");
const get4ExpensivePainting = dbConnection
  .query(`select id, name, price, img from paintings order by price desc limit 4;`)
  .then(res => res.rows)
  .catch(e => e);

module.exports = get4ExpensivePainting;
