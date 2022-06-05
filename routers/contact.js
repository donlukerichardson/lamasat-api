const ContactsControlles = require("../controlles/contact")
const { ApiEndpoints , HandleValidatorError} = require("../common/routersImports")
const router = require("express").Router()
const {CreateContactValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.contactEndpoints.list ,  ContactsControlles.getAllContacts )

// create
router.post(ApiEndpoints.contactEndpoints.create  , CreateContactValidator ,  HandleValidatorError , ContactsControlles.createContact )

 
module.exports = router