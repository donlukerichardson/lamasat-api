const {check} = require("express-validator");

const CreateValidator= [
   check("firstname").notEmpty().withMessage("firstname field is required") ,
   check("lastname").notEmpty().withMessage("lastname field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
   check("startAt").notEmpty().withMessage("startAt field is required") ,
   check("endAt").notEmpty().withMessage("endAt field is required") ,
   check("quantity").notEmpty().withMessage("quantity field is required") ,
   check("loan").notEmpty().withMessage("loan field is required") ,
   check("rule").notEmpty().withMessage("rule field is required") ,
   check("isAccountSuspended").notEmpty().withMessage("is Account Suspended field is required") ,
   check("isAccountActivated").notEmpty().withMessage("is Account Activated field is required") ,
   check("password").notEmpty().withMessage("password field is required") 
]

const SignupValidator = [
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

const UpdateUserValidator= [
   check("firstname").notEmpty().withMessage("firstname field is required") ,
   check("lastname").notEmpty().withMessage("lastname field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
   check("startAt").notEmpty().withMessage("startAt field is required") ,
   check("endAt").notEmpty().withMessage("endAt field is required") ,
   check("quantity").notEmpty().withMessage("quantity field is required") ,
   check("loan").notEmpty().withMessage("loan field is required") ,
   check("rule").notEmpty().withMessage("rule field is required") ,
   check("isAccountSuspended").notEmpty().withMessage("is Account Suspended field is required") ,
   check("isAccountActivated").notEmpty().withMessage("is Account Activated field is required") ,
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


const createChatValidator = [
   check("fullname").notEmpty().withMessage("fullname field is required"),
   check("email").notEmpty().withMessage("email field is required"),
   check("email").isEmail().withMessage("email must be email"),
   check("message").notEmpty().withMessage("message field is required"),
   check("user_id").notEmpty().withMessage("user id field is required"),
]
const replyChatValidator = [
   check("reply_message").notEmpty().withMessage("message field is required"),
]

const ContactValidator = [
   check("fullname").notEmpty().withMessage("fullname field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
   check("phone").notEmpty().withMessage("phone field is required") ,
   check("npa").notEmpty().withMessage("postcode or home address field is required") ,
   check("naissance").notEmpty().withMessage("year of birth field is required") ,
]

// const UpdateContactValidator = [
//    check("contact_id").notEmpty().withMessage("fullname field is required") ,
//    check("quantity").notEmpty().withMessage("email field is required") ,
//    check("email").isEmail().withMessage("email must be email") ,
//    check("phone").notEmpty().withMessage("phone field is required") ,
//    check("npa").notEmpty().withMessage("postcode or home address field is required") ,
//    check("naissance").notEmpty().withMessage("year of birth field is required") ,
// ]


module.exports = {
    CreateValidator ,
    LoginValidator ,
    emailValidator ,
    EditValidator ,
    ContactValidator ,
    ImageValidator  ,
    SignupValidator , UpdateUserValidator
    , replyChatValidator , createChatValidator
}