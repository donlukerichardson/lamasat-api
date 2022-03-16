const messages = require("../common/messages")
const mailer = require("../common/mailer")
const JWt = require("jsonwebtoken")
const ChatsRquest = require("../models/chat")

// getAllCahts
const getAllChats = (sort = '{"updatedAt" : 1}' , limit = 0 , skip = 0 , filter = '{"firstname" : { "$ne": "xxxlxxx" }}' ,  select = null , expend = null) => {

    return new Promise((resolve, reject) => { 
  
            ChatsRquest.find({}, (errFind, chats) => {
 
                if (errFind) {
                    reject(errFind)
                    return
                }

                if (chats.length <= 0) {
                    reject("there are no chats")
                    return
                }
    
                resolve(chats)
            
    
            })
                .populate(expend)
                .select(select)
                .sort(JSON.parse(sort))
                .limit(parseInt(limit))
                .skip(parseInt(skip))
                .setQuery({ ...JSON.parse(filter) })
 
    
    })
}


// get count
const getCount = ( filter = '{"firstname" : { "$ne": "xxxlxxx" }}' ) => {

    return new Promise((resolve, reject) => { 
  
            ChatsRquest.find({}, (errFind, chats) => {
 
                if (errFind) {
                    reject(errFind)
                    return
                }

                if (chats.length <= 0) {
                    reject("there are no chats")
                    return
                }
    
                resolve(chats)
            
    
            }).count({ ...JSON.parse(filter) })
 
    
    })
}

// create
const create = (fullname ,email , user_id , message) => {

    return new Promise((resolve, reject) => { // check email

            // inser a new user
            ChatsRquest.create({
                fullname ,email , user_id , message
            }, (errInsert, res) => {
                if (errInsert){ 
                    reject(errInsert)
                return
            }

                resolve(res)
            })
    })
}




// reply
const reply = (id ,reply_message) => {

    return new Promise((resolve, reject) => { // update user
       // check id
        ChatsRquest.findOne({}, (errFind, chat) => {
            if (errFind) 
                reject(errFind) 
            
            if (!chat) {
                reject("id not exist")
   
            } else {

                //update

                ChatsRquest.updateOne({}, { 
                    reply_message , replied : true ,
                     updatedAt: Date.now()
                }, (errUpdate, doc) => {
                    if (errUpdate){ 
                        reject(errUpdate)
                        return
                    }
                    
                    if (doc.modifiedCount > 0) {
                        resolve("modified")
        
        
                    } else {
                        reject("something went wrong")
        
                    }
        
                }).where("_id").equals(id)
               
            }

        }).where("_id").equals(id)



    })
}



// delete
const Delete = (id) => {
    return new Promise((resolve, reject) => { // update user
       // check id
        ChatsRquest.findOne({}, (errFind, chat) => {
            if (errFind) 
                reject(errFind)
            
            if (!chat) {
                reject("id not exist")

            } else {

                //update

        
                ChatsRquest.deleteMany({} , (errUpdate, doc) => {
                    if (errUpdate)
                        reject(errUpdate)
                    if (doc.deletedCount > 0) {
                        resolve("deleted")

                    } else {
                        reject("something went wrong")
                    }

                }).where("_id").equals(id)
            }

               

        }).where("_id").equals(id)

    })
}

module.exports = {
    create ,
    reply , 
    getCount ,
    Delete ,
    getAllChats
}