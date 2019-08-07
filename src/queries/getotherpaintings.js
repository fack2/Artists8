const dbConnection = require('../database/db_connection')

const getPainting2 = id => {
  return (dbConnection
    .query(
      `Select * from paintings where id_artist = (select id_artist from paintings where id=$1) and id!=$1 limit 2`,
      [id]
    )
    .then(res => res.rows)
    .catch(err => err))
}

module.exports = getPainting2
