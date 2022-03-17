const mongoose = require("mongoose")


const DB_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "mongodb://localhost:27017/test" : "mongodb+srv://admin:admin@cluster0.3av2c.mongodb.net/workdb" ;

function DB(){ 
    return mongoose.connect(DB_URL, (err) => {
            if (err) 
                throw new Error("db error")
            
            console.log("db start")
})

}
 

module.exports = DB