const UserControlles = require("../controlles/users")
const {  handleError , idValidator , passport , ApiEndpoints , HandleValidatorError} = require("../common/routersImports")
const router = require("express").Router()
const {LoginValidator , emailValidator , CreateValidator , ImageValidator  , EditValidator , SignupValidator, UpdateUserValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.UserEndpoints.list , passport.authenticate("superAdmin", {session: false}) 
,  UserControlles.getAllUsers ,  handleError)

// count
router.get(ApiEndpoints.UserEndpoints.count , passport.authenticate("superAdmin", {session: false}) 
,  UserControlles.getCount ,  handleError)

// login
router.post(ApiEndpoints.UserEndpoints.login, LoginValidator ,  HandleValidatorError , UserControlles.login)

// signup
router.post(ApiEndpoints.UserEndpoints.signup  , SignupValidator ,  HandleValidatorError , UserControlles.signup )

// create
router.post(ApiEndpoints.UserEndpoints.create, passport.authenticate("superAdmin", {session: false})  , CreateValidator ,  HandleValidatorError , UserControlles.create , handleError)

// get me 
router.get(ApiEndpoints.UserEndpoints.me , passport.authenticate("adminOrsuperAdmin", {session: false}) ,  UserControlles.getMe ,  handleError)

// edit user
router.put(ApiEndpoints.UserEndpoints.edit ,passport.authenticate("adminOrsuperAdmin", {session: false}) , EditValidator , idValidator, HandleValidatorError , UserControlles.editUser , handleError)

// update user
router.put(ApiEndpoints.UserEndpoints.update ,passport.authenticate("superAdmin", {session: false}) , UpdateUserValidator , idValidator, HandleValidatorError , UserControlles.updateUser , handleError)

// edit image
router.put(ApiEndpoints.UserEndpoints.image ,passport.authenticate("adminOrsuperAdmin", {session: false}) , ImageValidator , idValidator, HandleValidatorError , UserControlles.editImage , handleError)

// forgot password
router.put(ApiEndpoints.UserEndpoints.forgotPassword , emailValidator,  HandleValidatorError , UserControlles.forgotPasswordUser)

// delete
router.delete(ApiEndpoints.UserEndpoints.delete ,passport.authenticate("superAdmin", {session: false}) , idValidator , UserControlles.Delete , handleError)



module.exports = router