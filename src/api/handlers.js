var req_validations = require("./validations.js").request_validations()

module.exports.request_handlers = function () {
	return {
		get_hypothesis_res: function (hypothesis_id) {
			return new Promise(function (resolve, reject) {
				// Validate Params
				var valid = req_validations.validate_uuid(hypothesis_id);
				if (valid) {
					resolve("SUCCESS")
				} else {
					reject("Invalid hypothesis id " + JSON.stringify(hypothesis_id))
				}
			})
		}
	}
}