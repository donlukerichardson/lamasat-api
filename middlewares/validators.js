const {check} = require("express-validator");

const CreateContactValidator= [
   check("firstname").notEmpty().withMessage("firstname field is required") ,
   check("lastname").notEmpty().withMessage("lastname field is required") ,
   check("subject").notEmpty().withMessage("subject field is required") ,
   check("message").notEmpty().withMessage("message field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
]

const CreateAppointmentValidator= [
   check("firstname").notEmpty().withMessage("firstname field is required") ,
   check("lastname").notEmpty().withMessage("lastname field is required") ,
   check("phone").notEmpty().withMessage("phone field is required") ,
   check("date").notEmpty().withMessage("date field is required") ,
   check("time").notEmpty().withMessage("time field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
]


module.exports = {
   CreateContactValidator , 
   CreateAppointmentValidator
}