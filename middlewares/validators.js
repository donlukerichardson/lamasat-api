const {check} = require("express-validator");

const CreateValidator= [
   check("firstname").notEmpty().withMessage("firstname field is required") ,
   check("lastname").notEmpty().withMessage("lastname field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
   check("password").notEmpty().withMessage("password field is required") ,
   check("confirmpassword").notEmpty().withMessage("confirm password field is required") ,
   check("confirmpassword").custom((value , {req}) => {
       if(value != req.body.password) throw new Error("confirm password must be the same as password")
       else return  true
   }) 
]

const EditValidator= [
   check("firstname").notEmpty().withMessage("firstname field is required") ,
   check("lastname").notEmpty().withMessage("lastname field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
 ]

 const ImageValidator= [
   check("image").notEmpty().withMessage("image field is required") ,

]

 
const LoginValidator = [
    check("email").notEmpty().withMessage("email field is required") ,
    check("email").isEmail().withMessage("email must be email") ,
    check("password").notEmpty().withMessage("password field is required") ,
]


 const emailValidator = [
    check("email").notEmpty().withMessage("email field is required") ,
    check("email").isEmail().withMessage("email must be email") , ]


 const AccountSuspendedValidator = [
    check("isAccountSuspended").notEmpty().withMessage("type is required"),
 ]




const ContactValidator = [
   check("fullname").notEmpty().withMessage("fullname field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
   check("phone").notEmpty().withMessage("phone field is required") ,
   check("npa").notEmpty().withMessage("postcode or home address field is required") ,
   check("naissance").notEmpty().withMessage("year of birth field is required") ,
]

module.exports = {
    CreateValidator ,
    LoginValidator ,
    emailValidator ,
    AccountSuspendedValidator ,
    EditValidator ,
    ContactValidator ,
    ImageValidator 
}