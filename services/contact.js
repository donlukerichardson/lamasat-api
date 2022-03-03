const ContactsRquest = require("../models/contact")



// getAllContacts
const getAllContacts = (sort = '{"updatedAt" : 1}', limit = 0 , skip = 0, filter = '{"name" : { "$ne": "xxxlxxx" }}', select = null ) => {
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

            resolve(Contacts)


        })
            .select(select)
            .sort(JSON.parse(sort))
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .setQuery({ ...JSON.parse(filter) })



    })
}



// get count
const getCount = (filter = '{"name" : { "$ne": "xxxlxxx" }}' ) => {
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

            resolve(Contacts)


        }).count({ ...JSON.parse(filter) })



    })
}




// create Contact
const createContact = (fullname,email,phone,franchise,npa ,naissance) => {
    return new Promise((resolve, reject) => {
        //create
        ContactsRquest.create({
            fullname,email,phone,franchise,npa ,naissance
        }, (errCreate, doc) => {
            if (errCreate) {
                reject(errCreate)
                return
            }

             resolve(doc)
        })

    })
}

// view Contact
const viewContact = (id) => {

    return new Promise((resolve, reject) => {
        // check id
        ContactsRquest.findOne({}, (errFind, cnt) => {
            if (errFind)
                reject(errFind)

            if (!cnt) {
                reject("id not exist")

            } else {

                //view
                ContactsRquest.updateOne({} , { viewed : true} , (errUpdate, doc) => {
                        if (errUpdate) {
                            reject(errUpdate)
                            return
                        }

                        if (doc.modifiedCount > 0) {
                            resolve("modified")
            
            
                        } else {
                            reject("something went wrong")

            
                        }    

                    }).where("_id").equals(id)
            }//else
        }).where("_id").equals(id)

    })
}


// delete Contact
const deleteContact = (id) => {

    return new Promise((resolve, reject) => {

        // check id
        ContactsRquest.findOne({}, (errFind, cnt) => {
            if (errFind)
                reject(errFind)

            if (!cnt) {
                reject("id not exist")

            } else {
                //delete
                ContactsRquest.deleteOne({}
                    , (errUpdate, doc) => {
                        if (errUpdate) {
                            reject(errUpdate)
                            return
                        }

                        if (doc.deletedCount > 0) {
                            resolve("deleted")

                        } else {
                            reject("something went wrong")
                        }

                    }).where("_id").equals(id)
            }//else
        }).where("_id").equals(id)

    })
}



module.exports = {
    getAllContacts, deleteContact,  createContact,getCount , viewContact
}
