const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");
const saveOrUpdateData = require("../saveOrUpdateContact/index.json");
const { USE_ONLY_DEFAULT_DATA } = require("../../utils/constants");

/**
 * @todo add functionality for update and delete contacts
 */

router.post("/", multer.none(), function (req, res, next) {
	let customerId = req.query.customerId;

	let returnData = data.find((customerData) => {
		if (customerData.id == customerId) {
			return customerData;
		}
	});

	//functionality for adding contacts only
	try {
		if (saveOrUpdateData.length > 0 && !USE_ONLY_DEFAULT_DATA) {
			let mainContacts = saveOrUpdateData.filter(
				(customer) => customer.customerId == req.query.customerId
			)[0];
			if (mainContacts) returnData.contacts = mainContacts.contacts;
		}
	} catch (e) {
		console.log(
			"will not update contacts that are by default present for now\ncreate a new contact and then edit that contact."
		);
	}

	if (returnData) res.send(returnData);
	else res.send({});
});

module.exports = router;
