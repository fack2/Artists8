const dbConnection = require("../database/db_connection.js");
const text = `INSERT INTO paintings (paintingname, price, description, img, id_artist) VALUES($1,$2,$3,$4, $5);`;
// const text = `INSERT INTO paintings (name, price, description, img, id_artist) VALUES($1,$2,$3,$4, (select id from artists where name ilike $5) );`;
const addPainting = paintarray =>
  dbConnection
    .query(text, paintarray)
    .then(res => {})
    .catch(e => console.error(e.stack));
module.exports = addPainting;
