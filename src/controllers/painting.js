const getPaintings = require('../queries/get4paintings')
const getOtherPaintings = require('../queries/getotherpaintings')

exports.get = (req, res) => {
  getPaintings(req.params.id)
    .then(result => {
      getOtherPaintings(req.params.id)
        .then(result2 => {
          res.render('painting', { fourPaintingsDetails: result,
            morePaintings: result2 })
        })
    })
    .catch(err => console.log(err))
}
