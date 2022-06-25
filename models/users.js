const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserSchema = mongoose.Schema({
    firtsname: { 
        type: String,
        required: true,
        trim: true,
    },

    latsname: { 
        type: String,
        required: true,
        trim: true,
    },


    email: { 
        type: String,
        required: true,
        trim: true,
        unique : true
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

// hash Password
UserSchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

// compare Password
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

const UsersRquest = mongoose.model("user", UserSchema)




module.exports =  UsersRquest