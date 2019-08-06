const express = require("express");
const path = require('path');
const exphbas = require("express-handlebars");
const app = express();
app.use(router)


app.use(express.static(path.join(__dirname, '..', 'public')));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  "hbs",
  exphbas({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views", "partials")
  })
);




module.exports = app