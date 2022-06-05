const AppointmentControlles = require("../controlles/appointment")
const { ApiEndpoints , HandleValidatorError} = require("../common/routersImports")
const router = require("express").Router()
const {CreateAppointmentValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.AppointmentEndpoints.list ,  AppointmentControlles.getAllAppointments )

// get times
router.get(ApiEndpoints.AppointmentEndpoints.times ,  AppointmentControlles.getAllTimes )
  

// create
router.post(ApiEndpoints.AppointmentEndpoints.create  , CreateAppointmentValidator ,  HandleValidatorError , AppointmentControlles.createAppointment )

 
module.exports = router