const UsersModel = require("../services/users")
const codes = require("../common/codes")

// login
const login = (req, res) => {
    const {email , password} = req.body ;

    UsersModel.login(email , password).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


module.exports = {
     login 
}