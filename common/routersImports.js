const {check} = require("express-validator")
const {idValidator} = require("../middlewares/idValidator")
const {HandleValidatorError} = require("../middlewares/handleValidatorError")
const {ApiEndpoints ,} = require("../common/apiEndpoints")

module.exports = {
    check ,
    idValidator ,
    ApiEndpoints ,
    HandleValidatorError 
}