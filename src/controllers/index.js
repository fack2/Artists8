const express = require('express')

const router = express.Router()

const home = require('./home')
const painting = require('./painting')
const paintingForm = require('./paintingForm')

router.get('/', home.get)
router.get('/painting/:id', painting.promiseAll)
router.get('/painting-form', paintingForm.get)
router.post('/painting-form', paintingForm.post)

module.exports = router
