/**
 * @author Malay Satapathy
 * This is the constants file where all the necessary constants are writen
 * @exports all the necessary constants
 */

/**
 * @constant {String} rrdmsUrlRootPath contains path for Servlets written in IroxUI
 * @author Pranjal Agnihotri
 */
const RRDMS_URL_ROOT_PATH = "";

/**
 * @constant {String} rrdmsUrlPath conatins the path which we need to prefix so that our API will work
 * @author Malay Satapathy
 */
const RRDMS_URL_PATH = "/cms/tovo/v1/";

/**
 * @constant {String} rrdmsCrfUrlPath contains path for Crossfunctional-ui crf path for certain requests
 * @author Gyanesh Sharma
 */
const RRDMS_CRF_URL_PATH = "/crf/";

/**
 * @constant {Number} PORT conatins the default PORT for this API
 * @author Malay Satapathy
 */
const PORT_NUMBER = 4000;

/**
 * @constant {boolean} UseOnlyDefaultData should the response be modified to simulate server side storage
 * @author Ashutosh Sharma
 */
const USE_ONLY_DEFAULT_DATA = false;

/**
 * @constant {String} saveOrUpdateContactFilePath contains file path for saving and updating contacts
 * @author Ashutosh Sharma
 */
const SAVE_OR_UPDATE_CONTACT_FILE_PATH =
	"./api/routes/saveOrUpdateContact/index.json";

/**
 * @constant {Boolean} CLS_TOVO_UI_CONFIG_PRESENT
 */
const CLS_TOVO_UI_CONFIG_PRESENT = true;

module.exports = {
	RRDMS_URL_PATH,
	PORT_NUMBER,
	SAVE_OR_UPDATE_CONTACT_FILE_PATH,
	USE_ONLY_DEFAULT_DATA,
	CLS_TOVO_UI_CONFIG_PRESENT,
	RRDMS_CRF_URL_PATH,
	RRDMS_URL_ROOT_PATH,
};
