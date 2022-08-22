/**
 * A recursive function for checking whether two arrays are equal or not
 * Works for Array of objects as well
 * See https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/
 *
 * @param {Array} array1 The first array
 * @param {Array} array2 The second array
 *
 * @returns {Boolean} true if two arrays are same, false if different
 *
 * @author Sourodeep Chatterjee <sourodeep.c@highradius.com>
 */
const arraysMatch = function (array1, array2) {
	// Get the array1 type
	const type = Object.prototype.toString.call(array1);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(array2)) return false;

	// If items are not an object or array, return false
	if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	const array1Len =
		type === "[object Array]" ? array1.length : Object.keys(array1).length;
	const array2Len =
		type === "[object Array]" ? array2.length : Object.keys(array2).length;
	if (array1Len !== array2Len) return false;

	// Compare two items
	const compare = function (item1, item2) {
		// Get the object type
		const itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
			if (!arraysMatch(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {
			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2))
				return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === "[object Function]") {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}
		}
	};

	// Compare properties
	if (type === "[object Array]") {
		for (let i = 0; i < array1Len; i++) {
			if (compare(array1[i], array2[i]) === false) return false;
		}
	} else {
		for (let key in array1) {
			if (array1.hasOwnProperty(key)) {
				if (compare(array1[key], array2[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;
};

module.exports = {
	arraysMatch,
};
