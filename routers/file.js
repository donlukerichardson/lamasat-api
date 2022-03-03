const fileControlles = require("../controlles/file")
const { singleFile } = require("../common/uploader")
const {  handleError , idValidator , passport , ApiEndpoints} = require("../common/routersImports")
const router = require("express").Router()


// get Single Image View
router.get(ApiEndpoints.FileEndpoints.getSingleImageView  , //passport.authenticate("adminOrsuperAdmin", {session: false}) ,
idValidator , fileControlles.getSingleImageView , handleError)
 
// create Single Image
router.post(ApiEndpoints.FileEndpoints.createSingleImage,  passport.authenticate("adminOrsuperAdmin", {session: false})  ,
singleFile("./public/images" , "image" ) , fileControlles.createSingleImage , handleError)
  
 module.exports = router