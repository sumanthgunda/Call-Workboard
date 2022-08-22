const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");

router.post("/", multer.none(), function(req, res, next) {
  res.send(data);
});

module.exports = router;
