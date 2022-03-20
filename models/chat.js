const mongoose = require("mongoose")

const ChatSchema = mongoose.Schema({
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
    message: {
        type: String,
        required: true,
        trim: true,
    },
    replied: {
        type: Boolean,
        required: false,
        default : false
    },
    viewed: {
        type: Boolean,
        required : false , 
        default : false
    },
    reply_message: {
        type: String,
        required: false,
        trim: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "user"
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})


const ChatsRquest = mongoose.model("chat", ChatSchema)

 

module.exports =  ChatsRquest  