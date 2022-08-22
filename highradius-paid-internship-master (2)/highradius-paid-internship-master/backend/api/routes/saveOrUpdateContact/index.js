/**
 * @description
 * the structure for the index.josn file for this API
 * {
 *    type:array,
 *    description: array for storing customer for contact details.
 *    elements:{
 *      type:object,
 *      description: JSON object for storing contacts for one customer,
 *      properties:{
 *        customerId:{
 *          type:integer,
 *          description: unique number used for identifying customer supplied to UI as cutomerId and used as customerMapId in DB.
 *        }
 *        contacts:{
 *          type:array,
 *          description: array for storing contacts,
 *          elements:{
 *            type:object,
 *            desciption: obect for a single contact,
 *            properties:{
 *               isPrimary: boolean,
 *               firstName: String,
 *               lastName: String,
 *               email: String,
 *               mobileNumber: String,
 *               phoneNumber: String,
 *               phoneNumberExtension: String,
 *               zipCode: string,
 *               city: String,
 *               state: String,
 *               country: String
 *            }
 *          }
 *        }
 *      }
 *    }
 * }
 */

const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");
const { saveToJSON } = require("../../utils/fileUtils");
const { SAVE_OR_UPDATE_CONTACT_FILE_PATH } = require("../../utils/constants");

/**
 * @param {object} contactData
 * @param {Integer} customerContactId
 * @param {onject} targetContact
 *
 * @description create a contact object. for properties, first check in contactData then in targetContact.
 */
function createAContact(contactData, customerContactId, targetContact) {
	let contact = {
		...targetContact,
		isPrimary: contactData.isPrimary
			? contactData.isPrimary
			: targetContact
			? Boolean(targetContact.isPrimary)
			: false,
		firstName: contactData.firstName
			? String(contactData.firstName)
			: targetContact
			? targetContact.firstName
			: undefined,
		lastName: contactData.lastName
			? String(contactData.lastName)
			: targetContact
			? targetContact.lastName
			: undefined,
		email: contactData.email
			? String(contactData.email)
			: targetContact
			? targetContact.email
			: undefined,
		mobileNumber: contactData.contactMobile
			? String(contactData.contactMobile)
			: targetContact
			? targetContact.contactMobile
			: undefined,
		phoneNumber: contactData.contactOffice
			? String(contactData.contactOffice)
			: targetContact
			? targetContact.contactOffice
			: undefined,
		phoneNumberExtension: contactData.contactOfficeExtension
			? String(contactData.contactOfficeExtension)
			: targetContact
			? targetContact.contactOfficeExtension
			: undefined,
		zipCode: contactData.zipCode
			? String(contactData.zipCode)
			: targetContact
			? targetContact.zipCode
			: undefined,
		city: contactData.city
			? String(contactData.city)
			: targetContact
			? targetContact.city
			: undefined,
		state: contactData.state
			? String(contactData.state)
			: targetContact
			? targetContact.state
			: undefined,
		country: contactData.country
			? String(contactData.country)
			: targetContact
			? targetContact.country
			: undefined,
	};
	if (customerContactId) {
		contact.id = customerContactId;
	}
	return contact;
}

router.post("/", multer.none(), function (req, res, next) {
	//check both body and query for data.
	try {
		var queryData = JSON.parse(
			req.query.data ? req.query.data : req.body.data
		);
		if (
			queryData.customerId &&
			(queryData.firstName || queryData.lastName || queryData.email)
		) {
			console.log("first sep");
			let success = false;
			let newCustomerContactId = parseInt(Math.random() * 10000000);
			if (!Boolean(queryData.customerContactId)) {
				console.log("second sep"); //if params doesn't contains customerContactId then new contact will be created
				if (
					data.some(
						(customer) =>
							customer.customerId == queryData.customerId
					)
				) {
					console.log("third sep"); //if there is a customer with customerId same as in params
					data.map((customer) => {
						if (customer.customerId === queryData.customerId) {
							//find the customer in the data array and add new contact
							if (queryData.isPrimary) {
								//if new contact is primary, make all other contacts as non primary
								customer.contacts.map((contact) => {
									contact.isPrimary = false;
								});
							}
							customer.contacts = customer.contacts.concat(
								createAContact(queryData, newCustomerContactId)
							); //creating random integer id for new contact
						}
					});
					saveToJSON(data, SAVE_OR_UPDATE_CONTACT_FILE_PATH);
					success = true;
				} else {
					//if no customer is present with the customerId as in params then create a customer
					console.log("third pep");
					let updatedData = data.concat({
						customerId: queryData.customerId,
						contacts: [].concat(
							createAContact(queryData, newCustomerContactId)
						), //creating random integer id for new contact
					});
					saveToJSON(updatedData, SAVE_OR_UPDATE_CONTACT_FILE_PATH);
					success = true;
				}
			} else if (data.length != 0) {
				console.log("second pep"); //updating contacts for a customer
				/**
				 * @todo complete the functionality to update the contacts by adding it to fetchCustomer.do
				 */
				let targetCustomer = data.find(
					(customer) => customer.customerId == queryData.customerId
				);
				console.log(targetCustomer);
				let targetIndex = targetCustomer.contacts.findIndex(
					(contact) => contact.id == queryData.customerContactId
				);
				console.log(targetIndex);
				if (queryData.isPrimary) {
					targetCustomer.contacts.map((contact) => {
						contact.isPrimary = false;
					});
				}
				if (targetIndex === -1) throw "TargetIndexOutOfBound";
				targetCustomer.contacts[targetIndex] = createAContact(
					queryData,
					undefined,
					targetCustomer.contacts[targetIndex]
				);
				data.concat(targetCustomer);
				saveToJSON(data, SAVE_OR_UPDATE_CONTACT_FILE_PATH);
				success = true;
			}
			res.send({
				success: success,
				id: queryData.customerContactId
					? queryData.customerContactId
					: newCustomerContactId,
				status: null,
				reasonCode: null,
			});
		} else {
			console.log("first pep");
			res.send({ success: false });
		}
	} catch (e) {
		res.send({ success: false });
		console.log(
			"\x1b[31m%s\x1b[0m",
			"**Default contact edit is not yet supported.**\n" +
				"**Make sure you are using either query or body form-data to trasfer the parameters.**\n" +
				"**Make sure body content type is 'multipart/form-data' which is default type.**"
		);
	}
});

module.exports = router;
