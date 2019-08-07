const express = require('express')

const router = express.Router()

const home = require('./home')

router.use(express.json())

router.use(express.urlencoded())

const painting = require('./painting')
router.get('/painting/:id', painting.get)

router.get('/', home.get)
module.exports = router
