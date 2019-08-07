const express = require("express");
const router = express.Router();
const home = require("./home");
const GETpainting = require("./GETpainting-form");
const POSTpainting = require("./POSTpainting-form");
const path = require("path");
router.use(express.json());
router.use(express.urlencoded());
router.get("/", home.get);
router.get("/painting-form", GETpainting.get);
router.post("/painting-form", POSTpainting.post);

module.exports = router;
