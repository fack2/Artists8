const getAllArtists = require('../queries/getAllArtists')
const addPainting = require('../queries/addPainting')

exports.get = (req, res) => {
  getAllArtists
    .then(data => {
      res.render('painting-form', { artists: data })
    })
    .catch(err => console.log(err))
}

exports.post = (req, res) => {
  const { paintName, price, description, img, artistID } = req.body
  const paintarray = [paintName, price, description, img, artistID]
  addPainting(paintarray)
    .then(res.redirect('/'))
    .catch(err => {
      console.log(err)
    })
}
