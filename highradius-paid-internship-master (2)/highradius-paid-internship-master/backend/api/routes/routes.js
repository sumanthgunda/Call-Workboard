const express = require("express");
const router = express.Router();

//MY CALL WORKBOARD
const getUserProfile = require("./getUserProfile"); //http://localhost:4000/getUserProfile.do
const getUserOverviewJson = require("./getUserOverviewJson"); //http://localhost:4000/getUserOverviewJson.do
const getUserCallWorkBook = require("./getUserCallWorkBook"); //http://localhost:4000/getUserCallWorkBook.do?pageNumber=0&pageSize=5
const getFinishedCalls = require("./getFinishedCalls"); //http://localhost:4000/getFinishedCalls.do?pageNumber=0&pageSize=5
const getUpcomingSummary = require("./getUpcomingSummary"); //http://localhost:4000/getUpcomingSummary.do
const esCustomerSearch = require("./esCustomerSearch"); //http://localhost:4000/esCustomerSearch.do

//CALL PREP
const fetchCustomer = require("./fetchCustomer"); //http://localhost:4000/fetchCustomer.do?customerId=105784350
const getMappedCountries = require("./getMappedCountries"); //http://localhost:4000/getMappedCountries.do

//ROUTES - MY CALL WORKBOARD
router.use("/getUserProfile.do", getUserProfile);
router.use("/getUserOverviewJson.do", getUserOverviewJson);
router.use("/getUserCallWorkBook.do", getUserCallWorkBook);
router.use("/getFinishedCalls.do", getFinishedCalls);
router.use("/getUpcomingSummary.do", getUpcomingSummary);
router.use("/esCustomerSearch.do", esCustomerSearch);

//ROUTES - CALL PREP
router.use("/fetchCustomer.do", fetchCustomer);
router.use("/getMappedCountries.do",getMappedCountries);

/*Define your routes before this */

module.exports = router;
