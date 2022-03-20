const ContactsRquest = require("../models/contact")
const UsersRquest = require("../models/users")
const moment = require('moment');



// getAllContacts
const getAllContacts = (sort = '{"updatedAt" : 1}', limit = 0, skip = 0, filter = '{"name" : { "$ne": "xxxlxxx" }}', select = null) => {
    return new Promise((resolve, reject) => {

        ContactsRquest.find({}, (errFind, Contacts) => {

            if (errFind) {
                console.log(errFind);
                reject(errFind)
                return
            }

            if (Contacts.length <= 0) {
                reject("there are no Contacts")
                return
            }

            resolve(Contacts)


        })
            .populate("user_id")
            .select(select)
            .sort(JSON.parse(sort))
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .setQuery({ ...JSON.parse(filter) })



    })
}



// get count
const getCount = (filter = '{"name" : { "$ne": "xxxlxxx" }}') => {
    return new Promise((resolve, reject) => {


        ContactsRquest.find({}, (errFind, Contacts) => {

            if (errFind) {
                console.log(errFind);
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
const createContact = (fullname, email, phone, franchise, npa, naissance) => {
    return new Promise((resolve, reject) => {
        //create
        ContactsRquest.create({
            fullname, email, phone, franchise, npa, naissance
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
                ContactsRquest.updateOne({}, { viewed: true }, (errUpdate, doc) => {
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

// update Contact
const updateContact = (id) => {

    return new Promise((resolve, reject) => {
        // check id
        UsersRquest.findOne({}, (errFind, user) => {
            if (errFind)
                reject(errFind)

            if (!user) {
                reject("id not exist")

            } else {

                if (!user.isAccountSuspended && user.isAccountActivated && user.rule == "admin") {

                    const today = new Date()

                    if (today >= new Date(user.startAt)) {


                        if (today >= new Date(user.currentAt)) {
                            if (today > new Date(user.currentAt)) { // s10 // c17 / e20 // t18 

                                const days_C_T = moment(new Date(user.currentAt), "DD/MM/YYYY").diff(moment(today, "DD/MM/YYYY"), "days");
                                const days_T_E = moment(today, "DD/MM/YYYY").diff(moment(new Date(user.endAt), "DD/MM/YYYY"), "days");
                                let days = 1

                                if (days_T_E <= 0) {
                                    days = (days_C_T * -1) - 1
                                } else {
                                    days = ((days_C_T * -1) - days_T_E) - 1
                                }


                                user.currentAt = today

                                if (user.available > 0) {
                                    user.loan += user.available + (user.quantity * days)
                                } else {
                                    user.loan += (user.quantity * days)
                                }

                                user.available = user.quantity




                            }//end if

                            const limit = user.available + user.loan

                            if (limit <= 0)
                                reject("limit zero")
                            else {

                                ContactsRquest.find({}, (errFind, cntct) => {
                                    if (errFind)

                                        reject(errFind)

                                    if (cntct.length <= 0) {
                                        reject("there are no Contacts")
                                        return
                                    }


                                    const ids = cntct.map(cnt => cnt._id)

                                    ContactsRquest.updateMany({}, { used: true, user_id: id }, (errFind, doc) => {

                                        if (errFind) {
                                            reject(errFind)
                                            return
                                        }


                                        if (doc.modifiedCount > 0) {

                                            const count = doc.modifiedCount
                                            user.available -= count

                                            if (user.available < 0) {
                                                user.loan -= (user.available * -1)
                                                user.available = 0

                                            }

                                            user.save()
                                            resolve("done")

                                        } else {
                                            reject("something went wrong")

                                        }
                                    }).where("_id").in(ids)

                                }).and([{ type: "prod" }, { used: false }]).limit(limit)



                            }


                        }//if


                    } else {
                        reject("not starting yet");
                    }

                }//if

            } //else





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
    getAllContacts, deleteContact, createContact, getCount, viewContact, updateContact
}
