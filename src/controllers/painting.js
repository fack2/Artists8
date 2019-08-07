const get4paintings = require("../queries/get4paintings");
const getotherpaintings = require("../queries/get4paintings");

exports.get = (req, res) => {
  get4paintings(1, (err, result) => {
    if (err) {console.log("error", err);
     }
    console.log("result" ,result);
  })
  // res.render("painting", { fourPaintingsDetails: result } );
}


exports.get = (req, res) => {
  getotherpaintings(1, (err, result) => {
    if (err) {
      console.log("error", err);
    }
      console.log("result" ,result);
  })
    // res.render("painting", { otherPaintingDetails: result } );
 }