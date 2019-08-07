const addPainting = require("../../src/queries/addPainting");
const qs = require("querystring");
exports.post = ("/painting-form",
(req, res) => {
  let data = "";
  const paint = req.body;
  // console.log(req.body, "01010101010");
  // console.log("paint", paint);
  let paintarray = [
    paint.paintName,
    paint.price,
    paint.description,
    paint.img,
    // paint.artistName,
    paint.artistID
  ];
  addPainting(paintarray)
    .then(r => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
});
