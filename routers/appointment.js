const AppointmentControlles = require("../controlles/appointment")
const { ApiEndpoints , HandleValidatorError , idValidator} = require("../common/routersImports")
const router = require("express").Router()
const {CreateAppointmentValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.AppointmentEndpoints.list ,  AppointmentControlles.getAllAppointments )

// get times
router.get(ApiEndpoints.AppointmentEndpoints.times ,  AppointmentControlles.getAllTimes )

// create
router.post(ApiEndpoints.AppointmentEndpoints.create  , CreateAppointmentValidator ,  HandleValidatorError , AppointmentControlles.createAppointment )

// edit 
router.put(ApiEndpoints.AppointmentEndpoints.edit, idValidator , CreateAppointmentValidator , HandleValidatorError , AppointmentControlles.editAppointment)

//delete
router.delete(ApiEndpoints.AppointmentEndpoints.delete, idValidator  , AppointmentControlles.deleteAppointment)

module.exports = router