const getPaintingQuery = require('../queries/get4paintings')

exports.get = (req, res) => {
  getPaintingQuery(req.params.id)
    .then(result => {
      res.render('painting', { fourPaintingsDetails: result })
    })
    .catch(err => console.log(err))
}
