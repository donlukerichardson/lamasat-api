const UsersModel = require("../services/users")
const codes = require("../common/codes")


// get All Users
const getAllUsers = (req, res) => {
    const { sort , limit , skip , filter ,  select } = req.query ;

    UsersModel.getAllUsers( sort , limit , skip , filter ,  select ).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// get Count
const getCount = (req, res) => {
    const { filter } = req.query ;

    UsersModel.getCount( filter ).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// login
const login = (req, res) => {
    const {email , password} = req.body ;

    UsersModel.login(email , password).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// create
const create = (req, res) => {
    const {firstname , lastname ,email , password , rule} = req.body ;

    UsersModel.create(firstname , lastname ,email , password , rule).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// me
const getMe = (req, res) => {
    const user = req.user ;

    if(user){
        res.status(codes.ok).json({err: false, msg : user})
    }else{
        res.status(codes.badRequest).json({err: true, msg : "empty"})
    }
    
}


// edit User
const editUser = (req, res) => {
    const {firstname , lastname ,email , password , rule} = req.body ;
    const {id} = req.params ;

    UsersModel.editUser(id ,firstname , lastname ,email , password , rule).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// edit Image
const editImage= (req, res) => {
    const {image} = req.body ;
    const {id} = req.params ;

    UsersModel.editImage(id , image).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// forgot Password User
const forgotPasswordUser = (req, res) => {
    const {email} = req.body ;

    UsersModel.forgotPasswordUser(email).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// Account Suspension
const Suspension = (req, res) => {
    const {id} = req.params ;
    const { isAccountSuspended } = req.body ;

    UsersModel.Suspension(id , isAccountSuspended).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

module.exports = {
    getAllUsers,
     login ,
     create ,
     editUser , 
     Suspension ,
     forgotPasswordUser ,
     editImage ,
     getMe , getCount
}