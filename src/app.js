const express = require("express");
const path = require('path');
const get4painting = require('../src/queries/getData');
const exphbas = require("express-handlebars");
const app = express();


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  "hbs",
  exphbas({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    defaultLayout: "main",
    // partialsDir: path.join(__dirname, "views", "partials")
  })
);


app.get("/", (req, res,next) => {
  get4painting((err,data)=>{
    if(err)
      next(err);
      console.log(data,"00000000")
    res.render("home", {
      paintings: data
    });
  });
});

module.exports = app