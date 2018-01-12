var validator = require('validator')

module.exports.request_validations = function () {
    return {
        validate_uuid: function (hypothesis_id) {
            var valid = validator.isUUID(hypothesis_id, 4)
            return valid
        }
    }
}