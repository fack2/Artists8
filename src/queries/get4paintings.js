const dbConnection = require('../database/db_connection')

const getPaintingsQuery = id => {
  return (dbConnection
    .query(`Select artists.name, artists.country, paintings.paintingName, paintings.price, paintings.description, paintings.img from paintings inner join artists on (paintings.id_artist = artists.id) where paintings.id = $1`, [id])
    .then(res => res.rows)
  )
}

module.exports = getPaintingsQuery
