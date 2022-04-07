const mongoose = require("mongoose")

const WishlistSchema = mongoose.Schema({
   
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    franchise: {
        type: String,
        required: false,
        trim: true,
        default : ".."
    },
    npa : {
        type: String,
        required: false,
        trim: true,
        default : ".."
    },
    naissance: {
        type: String,
        required: false,
        trim: true,
        default : ".."
    },
    viewed: {
        type: Boolean,
        required : false , 
        default : false ,
    },
    used: {
        type: Boolean,
        required : false , 
        default : false
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId ,
        required : false , 
        ref : "user"
    },
    type: {
        type: String,
        required : false , 
        enum : ["demo" , "prod"] ,
        default : "prod"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const WishlistsRquest = mongoose.model("contact", WishlistSchema)

module.exports =  WishlistsRquest