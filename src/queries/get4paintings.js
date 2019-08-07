const dbConnection = require("../database/db_connection");

const getPainting = (id, cb) => {
  dbConnection.query(`Select artists.name, artists.country, paintings.paintingName, paintings.price, paintings.description, paintings.img from paintings inner join artists on (paintings.id_artist = artists.id) where artists.id = $1`, [id],(error, result) => {
  if (error) {
return cb(error)
  }
  cb(null, result.rows)
  })
}

module.exports = getPainting
