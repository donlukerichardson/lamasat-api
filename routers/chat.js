const ChatControlles = require("../controlles/chat")
const {  handleError , idValidator , passport , ApiEndpoints , HandleValidatorError} = require("../common/routersImports")
const router = require("express").Router()
const {replyChatValidator , createChatValidator } = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.ChatEndpoints.list , passport.authenticate("adminOrsuperAdmin", {session: false}) 
,  ChatControlles.getAllChats ,  handleError)

// count
router.get(ApiEndpoints.ChatEndpoints.count , passport.authenticate("adminOrsuperAdmin", {session: false}) 
,  ChatControlles.getCount ,  handleError)

// create
router.post(ApiEndpoints.ChatEndpoints.create, passport.authenticate("adminOrsuperAdmin", {session: false})  , createChatValidator ,  HandleValidatorError , ChatControlles.create , handleError)

// reply user
router.put(ApiEndpoints.ChatEndpoints.reply ,passport.authenticate("superAdmin", {session: false}) , replyChatValidator , idValidator, HandleValidatorError , ChatControlles.reply , handleError)

// view
router.put(ApiEndpoints.ChatEndpoints.view , passport.authenticate("admin", {session: false}), idValidator , ChatControlles.viewChat , handleError)

// delete
router.delete(ApiEndpoints.ChatEndpoints.delete ,passport.authenticate("superAdmin", {session: false}) , idValidator , ChatControlles.Delete , handleError)

module.exports = router