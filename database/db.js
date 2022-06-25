const mongoose = require("mongoose")
const app = require("express")()

//const DB_URL = (app.get("env") == "development") ? "mongodb://localhost:27017/test" : "mongodb+srv://admin:admin@cluster0.3av2c.mongodb.net/workdb" ;
const DB_URL = "mongodb+srv://admin:admin@cluster0.3av2c.mongodb.net/dev-lamasat"

function DB(){ 

    return mongoose.connect(DB_URL, (err) => {
            if (err) 
                throw new Error("db error")
            
            console.log("db start")
})
} 
 

module.exports = DB 