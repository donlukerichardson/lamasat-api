const ContactsControlles = require("../controlles/contact")
const {  handleError , idValidator , passport , ApiEndpoints , HandleValidatorError} = require("../common/routersImports")
const router = require("express").Router()
const {ContactValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.contactEndpoints.list ,  passport.authenticate("adminOrsuperAdmin", {session: false}) 
,  ContactsControlles.getAllContacts , handleError)

// count
router.get(ApiEndpoints.contactEndpoints.count ,  passport.authenticate("adminOrsuperAdmin", {session: false}) 
,  ContactsControlles.getCount , handleError)

// create
router.post(ApiEndpoints.contactEndpoints.create  , ContactValidator ,  HandleValidatorError , ContactsControlles.createContact )

// update
router.put(ApiEndpoints.contactEndpoints.update , passport.authenticate("admin", {session: false}), idValidator , ContactsControlles.updateContact , handleError)

// view
router.put(ApiEndpoints.contactEndpoints.view , passport.authenticate("adminOrsuperAdmin", {session: false}), idValidator , ContactsControlles.viewContact , handleError)

// delete
router.delete(ApiEndpoints.contactEndpoints.delete , passport.authenticate("adminOrsuperAdmin", {session: false}), idValidator , ContactsControlles.deleteContact , handleError)

 
module.exports = router 