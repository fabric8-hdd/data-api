var validator = require('validator')

module.exports.utils = function () {
    return {
        isUUID: function (hypothesis_id, version) {
            var valid = validator.isUUID(hypothesis_id, version)
            return valid
        }
    }
}