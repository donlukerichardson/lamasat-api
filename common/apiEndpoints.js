const Host = {
  ROOT: "http://localhost:3001",
  PREFIX: "/v1/api",
 /// FRONTEND: "http://localhost:3000",
  FRONTEND: "https://www.compareprime.com",
}

const ApiEndpoints = {
  UserEndpoints: {
    route: `${Host.PREFIX}/user`,
    list: `/list`,
    login: `/login`,
    create: `/create`,  
    me: `/me`,  
    edit: `/edit/:id`,
    image: `/image/:id`,
    suspension: `/suspension/:id`,
    forgotPassword: `/forgot-password`,
    count: `/count`,

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
  },
 
};

module.exports = {ApiEndpoints , Host}