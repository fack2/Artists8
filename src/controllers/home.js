const get4ExpensivePainting = require("../../src/queries/getData");
exports.get = ("/",
(req, res, next) => {
  get4ExpensivePainting
    .then(data => {
      res.render("home", {
        paintings: data
      });
    })
    .catch(err => {
      next(err);
    });
});
