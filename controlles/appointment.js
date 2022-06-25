const AppointmentsServ = require("../services/git")
const codes = require("../common/codes")



// get All Appointments  
const getAllAppointments = (req, res) => { 
    const { sort , limit , skip , filter} = req.query ;

    AppointmentsServ.getAllAppointments( sort , limit , skip , filter).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}




// create Appointment
const createAppointment = (req, res) => {
    const {firstname , lastname , email , phone , date , time} = req.body ;
    AppointmentsServ.createAppointment(firstname , lastname , email , phone , date , time).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
} 

// get times
const getAllTimes = (req, res) => {
    const {filter} = req.query ;
    AppointmentsServ.getAllTimes(filter).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// edit Appointments
const editAppointment = (req, res) => {
    const { firstname , lastname , email , phone , date , time} = req.body ;
    const {id} = req.params ;

    AppointmentsServ.editAppointment(id, firstname , lastname , email , phone , date , time).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// delete Appointments
const deleteAppointment = (req, res) => {
    const {id} = req.params ;

    AppointmentsServ.deleteAppointment(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


module.exports = {
   getAllAppointments , createAppointment  , getAllTimes , deleteAppointment , editAppointment
}