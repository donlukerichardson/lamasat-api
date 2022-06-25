const Host = {
  ROOT: "http://localhost:3001",
  PREFIX: "/v1/api",
  FRONTEND: "http://localhost:3000"

}

const ApiEndpoints = {
  UserEndpoints: {
    route: `${Host.PREFIX}/user`,
    login: `/login`
    
},
  AppointmentEndpoints: {
      route: `${Host.PREFIX}/appointment`,
      list: `/list`,
      create: `/create` , 
      times: `/times` , 
      delete: `/delete/:id` , 
      edit: `/edit/:id` , 
      
  },
  PackEndpoints: {
    route: `${Host.PREFIX}/pack`,
    list: `/list`,
    create: `/create` , 
    delete: `/delete/:id` , 
    edit: `/edit/:id` , 
    
},
  contactEndpoints: {
    route: `${Host.PREFIX}/contact`,
    list: `/list`,
    create: `/create`,
  },
 
};

module.exports = {ApiEndpoints , Host}