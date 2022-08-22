const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");

router.post("/", multer.none(), function (req, res, next) {
	let resData;
	if (data.FinishedCallsPage.FinishedCalls && req.query.filter) {
		resData = [];
		var counter = 0;
		data.FinishedCallsPage.FinishedCalls.map((value, index) => {
			if (value.callStatus == "" + req.query.filterType && counter != 6) {
				resData.push(value);
				counter = counter + 1;
			}
		});
		res.data = resData;
	} else {
		resData = {
			finishedCalls: data.FinishedCallsPage.FinishedCalls.slice(
				parseInt(req.query.pageSize) * parseInt(req.query.pageNumber),
				parseInt(req.query.pageSize) *
					(1 + parseInt(req.query.pageNumber))
			),
			finishedCallsCount: data.FinishedCallsPage.finishedCallsCount,
			finishedCallsOverview: data.FinishedCallsPage.FinishedCallsOverview,
		};
	}
	setTimeout(() => res.send(resData), 10);
});

module.exports = router;
