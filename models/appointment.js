const mongoose = require("mongoose")

const AppointmentSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    time: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


const AppointmentsRquest = mongoose.model("appointment", AppointmentSchema)

module.exports =  AppointmentsRquest