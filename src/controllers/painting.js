const getPaintings = require('../queries/get4paintings')
const getOtherPaintings = require('../queries/getotherpaintings')

exports.promiseAll = (req, res) => {
  Promise.all([getPaintings(req.params.id), getOtherPaintings(req.params.id)])
    .then(result => res.render('painting', { painting: result[0], allPaintings: result[1] }))
    .catch(err => console.log(err))
}
