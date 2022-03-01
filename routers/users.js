const UserControlles = require("../controlles/users")
const {  handleError , idValidator , passport , ApiEndpoints , HandleValidatorError} = require("../common/routersImports")
const router = require("express").Router()
const {LoginValidator , emailValidator , CreateValidator , ImageValidator  , EditValidator , AccountSuspendedValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.UserEndpoints.list , passport.authenticate("adminOrsuperAdmin", {session: false}) 
,  UserControlles.getAllUsers ,  handleError)

// count
router.get(ApiEndpoints.UserEndpoints.count , passport.authenticate("adminOrsuperAdmin", {session: false}) 
,  UserControlles.getCount ,  handleError)


// login
router.post(ApiEndpoints.UserEndpoints.login, LoginValidator ,  HandleValidatorError , UserControlles.login)

// create
router.post(ApiEndpoints.UserEndpoints.create, passport.authenticate("adminOrsuperAdmin", {session: false})  , CreateValidator ,  HandleValidatorError , UserControlles.create , handleError)

// get me
router.get(ApiEndpoints.UserEndpoints.me , passport.authenticate("adminOrsuperAdmin", {session: false}) ,  UserControlles.getMe ,  handleError)

// edit user
router.put(ApiEndpoints.UserEndpoints.edit ,passport.authenticate("adminOrsuperAdmin", {session: false}) , EditValidator , idValidator, HandleValidatorError , UserControlles.editUser , handleError)

// edit image
router.put(ApiEndpoints.UserEndpoints.image ,passport.authenticate("adminOrsuperAdmin", {session: false}) , ImageValidator , idValidator, HandleValidatorError , UserControlles.editImage , handleError)

// forgot password
router.put(ApiEndpoints.UserEndpoints.forgotPassword , emailValidator,  HandleValidatorError , UserControlles.forgotPasswordUser)

// Account Suspension
router.put(ApiEndpoints.UserEndpoints.suspension ,passport.authenticate("adminOrsuperAdmin", {session: false}) , AccountSuspendedValidator, idValidator , HandleValidatorError , UserControlles.Suspension , handleError)




module.exports = router