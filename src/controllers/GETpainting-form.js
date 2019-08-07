const getAllArtists = require('../../src/queries/getAllArtists')
exports.get = ('/painting-form',
(req, res) => {
  getAllArtists
    .then(data => {
      res.render('painting-form', { artists: data })
    })
    .catch(err => console.log(err))
})
