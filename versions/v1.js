const { ApiEndpoints } = require("../common/apiEndpoints")
const { app  } = require("../server")

const users = require("../routers/users")
const file = require("../routers/file")
const contact = require("../routers/contact")
const chat = require("../routers/chat")
 

app.use(ApiEndpoints.UserEndpoints.route, users)
app.use(ApiEndpoints.FileEndpoints.route, file)
app.use(ApiEndpoints.contactEndpoints.route, contact)
app.use(ApiEndpoints.ChatEndpoints.route, chat)

app.use((req, res, next) => {
    res.status(404).json("Api not found") 
})

if (app.get("env") == "development") {
    app.listen(process.env.PORT || 3001 , () => {
        console.log("server start dev")
    })
} else {
    app.listen(2000 , () => {
        console.log("server start prod")
    })
}
