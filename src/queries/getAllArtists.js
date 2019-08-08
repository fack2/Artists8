const dbConnection = require('../database/db_connection.js')

const getAllArtists = dbConnection
  .query(`select * from artists ;`)
  .then(res => res.rows)

module.exports = getAllArtists
