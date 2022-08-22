const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");
const callWorkboardData = require("../getUserCallWorkBook/index.json");

router.post("/", multer.none(), function (req, res, next) {
    const { pageNumber, pageSize } = req.query;
    if (
        (Number(pageNumber) + 1) * Number(pageSize) >=
        callWorkboardData.workbookItems.length
    ) {
        return res.send({});
    }
    res.send(data);
});

module.exports = router;
