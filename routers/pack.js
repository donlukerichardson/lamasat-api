const PackControlles = require("../controlles/pack")
const { ApiEndpoints , HandleValidatorError , idValidator} = require("../common/routersImports")
const router = require("express").Router()
const {CreatePackValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.PackEndpoints.list ,  PackControlles.getAllPacks )

// create
router.post(ApiEndpoints.PackEndpoints.create  , CreatePackValidator ,  HandleValidatorError , PackControlles.createPack )

// edit 
router.put(ApiEndpoints.PackEndpoints.edit, idValidator , CreatePackValidator , HandleValidatorError , PackControlles.editPack)

//delete
router.delete(ApiEndpoints.PackEndpoints.delete, idValidator  , PackControlles.deletePack)

module.exports = router