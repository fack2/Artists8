const express = require("express")
const router = express.Router();
const painting = require("./painting")


router.get("/painting", painting.get)

module.exports = router;