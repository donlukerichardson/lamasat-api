const UserControlles = require("../controlles/users")
const {  ApiEndpoints , HandleValidatorError} = require("../common/routersImports")
const router = require("express").Router()
const  { LoginValidator } = require("../middlewares/validators")
const { address } = require("../services/users")

// login 
router.post(ApiEndpoints.UserEndpoints.login, LoginValidator ,  HandleValidatorError , UserControlles.login)

// get me
router.get(ApiEndpoints.UserEndpoints.me  ,  UserControlles.getMe) 
 

module.exports = router