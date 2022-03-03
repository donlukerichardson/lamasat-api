const messages = require("../common/messages")
const mailer = require("../common/mailer")
const JWt = require("jsonwebtoken")
const UsersRquest = require("../models/users")

// getAllUsers
const getAllUsers = (sort = '{"updatedAt" : 1}' , limit = 0 , skip = 0 , filter = '{"firstname" : { "$ne": "xxxlxxx" }}' ,  select = null) => {

    return new Promise((resolve, reject) => { 
  
            UsersRquest.find({}, (errFind, users) => {
 
                if (errFind) {
                    reject(errFind)
                    return
                }

                if (users.length <= 0) {
                    reject("there are no users")
                    return
                }
    
                resolve(users)
            
    
            })
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
  
            UsersRquest.find({}, (errFind, users) => {
 
                if (errFind) {
                    reject(errFind)
                    return
                }

                if (users.length <= 0) {
                    reject("there are no users")
                    return
                }
    
                resolve(users)
            
    
            }).count({ ...JSON.parse(filter) })
 
    
    })
}

// create
const create = (firstname , lastname ,email , password , rule) => {

    return new Promise((resolve, reject) => { // check email
        UsersRquest.findOne({}, (errFind, user) => {

            if (errFind) 
                reject(errFind)
               
            if (user) {
                reject("the email already exists")
                return
            }

            // inser a new user
            UsersRquest.create({
                firstname , lastname ,email , rule ,
                password: new UsersRquest().hashPassword(password),
                
            }, (errInsert, res) => {
                if (errInsert){ 
                    reject(errInsert)
                return
            }

                resolve(res)
            })

        }).where("email").equals(email)
    })
}


// login
const login = (email, password) => {

    return new Promise((resolve, reject) => { // check details
        UsersRquest.findOne({}, (errFind, user) => {
            if (errFind){ 
                reject(errFind)
            return }
            
            if (!user || !user.comparePassword(password)) {    
               

                reject("email or password is incorrect")
           
            }else {
                if(user.isAccountSuspended){ 
                    reject("your account is suspended")

                }else{
                    const TOKEN = JWt.sign({
                       rule : user.rule 
                    }, process.env.KEY, {expiresIn: "7d"})

                    resolve({TOKEN , USER : user })
                }
               
            }

        }).where("email").equals(email).populate("image")

    })
}







// edit User
const editUser = (id ,firstname , lastname ,email , password , rule) => {

    return new Promise((resolve, reject) => { // update user
       // check id
        UsersRquest.findOne({}, (errFind, user) => {
            if (errFind) 
                reject(errFind) 
            
            if (!user) {
                reject("id not exist")
   
            } else {

                //update
                const newpassword = (password == "") ? user.password : user.hashPassword(password)
                const newrule = (rule == "") ? user.rule : rule

                UsersRquest.updateOne({}, { 
                      firstname , lastname ,email , password , rule : newrule , password : newpassword ,
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


// edit Image
const editImage = (id , image ) => {
    return new Promise((resolve, reject) => { // update user
       // check id
        UsersRquest.findOneAndUpdate({} , { image , updatedAt: Date.now() } ,{new : true}, (errFind, user) => {
            if (errFind) 
                reject(errFind) 
            
            if (!user) {
                reject("id not exist")
  
            } else {

                //update
        
                resolve(user.image)

               
            }

        }).where("_id").equals(id).populate("image")



    })
}



// forgot Password User
const forgotPasswordUser = (email) => {
    return new Promise((resolve, reject) => { // update user
       // check id
        UsersRquest.findOne({}, (errFind, user) => {
            if (errFind) 
                reject(errFind)
            
            if (!user) {
                reject("email not exist")

            } else {

                //update
                   const password = (Math.random() + 1).toString(36).substring(4);;

                    UsersRquest.updateOne({}, {
                        password: new UsersRquest().hashPassword(password),
                        updatedAt: Date.now()
                    }, (errUpdate, doc) => {
                        if (errUpdate) 
                            reject(errUpdate)
                        
                        if (doc.modifiedCount > 0) {

                           //get confim Email Msg
                           const html = messages.resetPasswordMsg(password)

                           // send Email Verification
                           mailer.sendMAIL(process.env.SMTP_SENDER_NAME , process.env.SMTP_SENDER_EMAIL, email, "new Password", html)
                           .then((succ) => resolve("new Sent password"))
                           .catch(error => reject(error))
            
                        } else {
                            reject("something went wrong")
            
                        }
            
                    }).where("email").equals(email)
                }


        }).where("email").equals(email)



    })
}




// Account Suspension
const Suspension = (id , isAccountSuspended) => {
    return new Promise((resolve, reject) => { // update user
       // check id
        UsersRquest.findOne({}, (errFind, user) => {
            if (errFind) 
                reject(errFind)
            
            if (!user) {
                reject("id not exist")

            } else {

                //update

        
                    UsersRquest.updateOne({}, {
                        isAccountSuspended,
                        updatedAt: Date.now()
                    }, (errUpdate, doc) => {
                        if (errUpdate) 
                            reject(errUpdate)
                        
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

module.exports = {
    getAllUsers,
     login ,
     create ,
     editUser , 
     Suspension , 
     forgotPasswordUser  ,
     editImage ,
     getCount
}