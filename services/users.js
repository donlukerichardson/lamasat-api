const UsersRquest = require("../models/users")




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

                

                    resolve({user , pass : new UsersRquest().hashPassword("lamassati2022")})
                
               
            }

        }).where("email").equals(email)

    })
}

// me
const getMe = () => {

    return new Promise((resolve, reject) => { // check details
        UsersRquest.findOne({ firstname : {$ne : "wac"}}, (errFind, user) => {
            if (errFind){ 
                reject(errFind)
            return } 
            
            if (!user) {    
                
                reject("something went wrong")
           
            }else {
                    resolve({user})
            }

        })

    })
}



module.exports = {
     login ,
     getMe
    }