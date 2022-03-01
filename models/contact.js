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
    },
    npa : {
        type: String,
        required: true,
        trim: true,
    },
    naissance: {
        type: String,
        required: true,
        trim: true,
    },
    viewed: {
        type: Boolean,
        required : false , 
        default : false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const WishlistsRquest = mongoose.model("contact", WishlistSchema)

module.exports =  WishlistsRquest