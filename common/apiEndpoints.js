const Host = {
  ROOT: "http://localhost:3001",
  PREFIX: "/v1/api",
  FRONTEND: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:3000" : "https://www.compareprime.com" ,

}

const ApiEndpoints = {
  UserEndpoints: {
    route: `${Host.PREFIX}/user`,
    list: `/list`,
    login: `/login`,
    create: `/create`,  
    me: `/me`,  
    delete: `/delete/:id`,  
    edit: `/edit/:id`,
    update: `/update/:id`,
    image: `/image/:id`,
    forgotPassword: `/forgot-password`,
    count: `/count`,
    signup: `/signup`,

  },
    ChatEndpoints: {
      route: `${Host.PREFIX}/chat`,
      list: `/list`,
      create: `/create`,  
      delete: `/delete/:id`,  
      reply: `/reply/:id`,
      count: `/count`,
      view: `/view/:id`,
  },
  FileEndpoints: {
    route: `${Host.PREFIX}/file`,
    getSingleImageView: `/get-single-image/:id/view`,
    getSingleImageDownload: `/get-single-image/:id/download`,
    createSingleImage: `/create-single-image`,
  },
  contactEndpoints: {
    route: `${Host.PREFIX}/contact`,
    list: `/list`,
    create: `/create`,
    delete: `/delete/:id`,
    count: `/count`,
    view: `/view/:id`,
    update: `/update/:id`,
  },
 
};

module.exports = {ApiEndpoints , Host}