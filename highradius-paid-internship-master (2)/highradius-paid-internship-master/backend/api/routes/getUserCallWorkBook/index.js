const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");

router.post("/", multer.none(), function (req, res, next) {
	let pageSize = parseInt(req.query.pageSize);
	let pageNumber = parseInt(req.query.pageNumber);

	const startingValue = pageNumber * pageSize;
	const endingValue = (pageNumber + 1) * pageSize;

	const slicedData = data.workbookItems.slice(startingValue, endingValue);

	res.data = {
		overview: data.overview,
		workbookItems: slicedData,
	};
	if (res.data) res.send(res.data);
	else res.send([]);
});

module.exports = router;
