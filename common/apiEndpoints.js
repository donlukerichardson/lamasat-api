const Host = {
  ROOT: "http://localhost:3001",
  PREFIX: "/v1/api",
  FRONTEND: "http://localhost:3000"

}

const ApiEndpoints = {
  AppointmentEndpoints: {
      route: `${Host.PREFIX}/appointment`,
      list: `/list`,
      create: `/create` , 
      times: `/times` , 
      
  },
  contactEndpoints: {
    route: `${Host.PREFIX}/contact`,
    list: `/list`,
    create: `/create`,
  },
 
};

module.exports = {ApiEndpoints , Host}