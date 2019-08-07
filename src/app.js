const express = require('express')
const path = require('path')
const router = require('./controllers')
const exphbs = require('express-handlebars')
const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.json())
app.use(express.urlencoded())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, 'views', 'partials')
  })
)

app.use(router)

module.exports = app
