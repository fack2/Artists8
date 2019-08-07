const express = require('express')

const router = express.Router()

const home = require('./home')

const GETpainting = require('./GETpainting-form')

const POSTpainting = require('./POSTpainting-form')

router.use(express.json())

router.use(express.urlencoded())

const painting = require('./painting')

router.get('/painting/:id', painting.get)

router.get('/', home.get)
router.get('/painting-form', GETpainting.get)

router.post('/painting-form', POSTpainting.post)

module.exports = router
