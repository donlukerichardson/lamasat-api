const AppointmentsRquest = require("../models/appointment")



// getAllAppointments
const getAllAppointments = (sort = '{"createdAt" : 1}', limit = 0 , skip = 0 , filter = '{"firstname" : { "$ne": "xxxlxxx" }}',) => {
    return new Promise((resolve, reject) => {

        AppointmentsRquest.find({}, (errFind, Appointments) => {

            if (errFind) {console.log(errFind);
                reject(errFind)
                return
            }

            if (Appointments.length <= 0) {
                reject("there are no Appointments")
                return
            }

            resolve(Appointments)


        })
            .sort(JSON.parse(sort))
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .setQuery({ ...JSON.parse(filter) })


    })
}




// get times
const getAllTimes = ( filter = '{"firstname" : { "$ne": "xxxlxxx" }}') => {
    return new Promise((resolve, reject) => {

        AppointmentsRquest.find({}, (errFind, Appointments) => {

            if (errFind) {console.log(errFind);
                reject(errFind)
                return
            }

            if (Appointments.length <= 0) {
                reject("there are no Appointments")
                return
            }

            const times = [
                "09:00" ,
                "10:00" ,
                "11:00" ,
                "12:00" ,
                "13:00" ,
                "14:00" ,
                "15:00" ,
                "16:00" ,
                "17:00" ,
                "18:00" ,
                "19:00" ,
                "20:00" ,
                "21:00" ,
                "22:00" ,
                "23:00" ,
            ].filter(t => !Appointments.includes(t))

            resolve(times)


        })

            .distinct("time" , { ...JSON.parse(filter) })


    })
}




// create Appointment
const createAppointment = (firstname , lastname , email , phone , date , time) => {
    return new Promise((resolve, reject) => {
        //create
        AppointmentsRquest.create({
            firstname , lastname , email , phone , date , time
        }, (errCreate, doc) => {
            if (errCreate) {
                reject(errCreate)
                return
            }

             resolve("created")
        }) 

    })
}


module.exports = {
    getAllAppointments, createAppointment , getAllTimes
}