const { ApiEndpoints } = require("../common/apiEndpoints")
const { app  } = require("../server")

const contact = require("../routers/contact")
const appointment = require("../routers/appointment")
 

app.use(ApiEndpoints.contactEndpoints.route, contact)
app.use(ApiEndpoints.AppointmentEndpoints.route, appointment)

app.use((req, res, next) => {
    res.status(404).json("Api not found") 
})

app.listen(3001 , () => {
   console.log("server start")
})
