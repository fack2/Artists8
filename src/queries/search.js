const dbConnection = require('../database/db_connection')

const search = searchFor => {
  return (dbConnection
    .query(`select id, paintingname , price, img from paintings where paintingname ilike $1`, ['%' + searchFor + '%'])
    .then(res => res.rows)
    .catch(err => err))
}

module.exports = search
