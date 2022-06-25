const mongoose = require("mongoose")

const PackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    options: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    oldprice: {
        type: Number,
        required: true,
    },
   
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


const PacksRquest = mongoose.model("pack", PackSchema)

module.exports =  PacksRquest