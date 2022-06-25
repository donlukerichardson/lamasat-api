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

                

                    resolve({user})
                
               
            }

        }).where("email").equals(email)

    })
}



module.exports = {
     login ,
    
    }