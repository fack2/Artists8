const search = require('../queries/search')

exports.get = (req, res) => {
  search(req.params.search).then((result) => {
    res.render('home', { paintings: result,
      search: '0' })
  })
    .catch(err => console.log(err)
    )
}
