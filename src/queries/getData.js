const dbConnection = require("../database/db_connection.js");
const get4painting = cb => {
  dbConnection.query(
    `select id,name,price,img from paintaings order By price desc limit 4;`,
    (err, res) => {
      if (err) {
        console.log(err);
        return cb(err);
      }
      cb(null, res.rows);
    }
  );
};

module.exports = get4painting;
