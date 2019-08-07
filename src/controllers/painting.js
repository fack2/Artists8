const getPaintingQuery = require('../queries/get4paintings')
const getotherpaintings = require('../queries/getotherpaintings')

exports.get = (req, res) => {
  getPaintingQuery(req.params.id)
    .then(result => {
      getotherpaintings(req.params.id)
        .then(result2 => {
          res.render('painting', { fourPaintingsDetails: result,
            morePaintings: result2 })
        })
    })
    .catch(err => console.log(err))
}
