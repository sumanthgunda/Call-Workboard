/**
 * @author ashutosh.sharma
 * This is util library to handle any operations with .json files.
 */

const fs = require('file-system');

//function to save json to file
function saveToJSON(data, path) {
	try {
		fs.writeFile(path, JSON.stringify(data), (err) => {
			if (err) throw err;
		});
	}
	catch (err) {
		return false;
	}
	return true;
}

module.exports = {
	saveToJSON
}