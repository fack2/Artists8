const express = require("express");

const router = express.Router();

const home = require("./home");

const path = require("path");

router.use(express.json());

router.use(express.urlencoded());

const painting = require("./painting")
router.get("/painting", painting.get)

router.get("/", home.get);
module.exports = router;
