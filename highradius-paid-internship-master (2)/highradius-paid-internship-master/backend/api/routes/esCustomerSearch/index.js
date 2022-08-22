const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");

router.post("/", multer.none(), function (req, res, next) {
	const { customerName } = req.body;
	const filteredData = data.customer.filter((eachCustomer) =>
		eachCustomer.customerName
			.toLowerCase()
			.includes(customerName.toLowerCase())
	);
	res.send({
		total: filteredData.length,
		customer: filteredData,
		bucketNames: data.bucketNames,
	});
});

module.exports = router;
