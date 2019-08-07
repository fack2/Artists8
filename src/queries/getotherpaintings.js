const dbConnection = require('../database/db_connection')

const getPainting2 = (id, cb) => {
  dbConnection.query(
    `Select * from paintings where id_artist = (select id_artist from paintings where id=$1) and id!=$1`,
    [id],
    (error, result) => {
      if (error) {
        return cb(error)
      }
      cb(null, result.rows)
    }
  )
}

module.exports = getPainting2
