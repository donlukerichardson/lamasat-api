const ContactsRquest = require("../models/contact")



// getAllContacts
const getAllContacts = (sort = '{"createdAt" : 1}', limit = 0 , skip = 0) => {
    return new Promise((resolve, reject) => {

        ContactsRquest.find({}, (errFind, Contacts) => {

            if (errFind) {console.log(errFind);
                reject(errFind)
                return
            }

            if (Contacts.length <= 0) {
                reject("there are no Contacts")
                return
            }

            resolve({ skip  , limit , count : Contacts.length , values : Contacts })


        })
            .sort(JSON.parse(sort))
            .limit(parseInt(limit))
            .skip(parseInt(skip))

    })
}






// create Contact
const createContact = (firstname , lastname , email , phone , subject , message ) => {
    return new Promise((resolve, reject) => {
        //create
        ContactsRquest.create({
            firstname , lastname , email , phone , subject , message 
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
    getAllContacts, createContact
}