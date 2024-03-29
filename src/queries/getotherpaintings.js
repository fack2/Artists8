const dbConnection = require('../database/db_connection')

const getOtherPaintings = id => {
  return (dbConnection
    .query(
      `select * from paintings where id_artist = (select id_artist from paintings where id=$1) and id!=$1 limit 2`,
      [id]
    )
    .then(res => res.rows)
  )
}

module.exports = getOtherPaintings
