const addPainting = require('../../src/queries/addPainting')

exports.post = ('/painting-form',
(req, res) => {
  const paint = req.body
  const paintarray = [
    paint.paintName,
    paint.price,
    paint.description,
    paint.img,
    paint.artistID
  ]
  addPainting(paintarray)
    .then(r => {
      res.redirect('/')
    })
    .catch(err => {
      console.log(err)
    })
})
