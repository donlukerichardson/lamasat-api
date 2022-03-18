const mongoose = require("mongoose")
const app = require("express")()

const DB_URL = (app.get("env") == "development") ? "mongodb://localhost:27017/test" : "mongodb+srv://admin:admin@cluster0.3av2c.mongodb.net/workdb" ;

function DB(){ 
    console.log("db start" , (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "mongodb://localhost:27017/test" : "mongodb+srv://admin:admin@cluster0.3av2c.mongodb.net/workdb")

    return mongoose.connect(DB_URL, (err) => {
            if (err) 
                throw new Error("db error")
            
            console.log("db start")
})
} 
 

module.exports = DB 