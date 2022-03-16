const ContactsModel = require("../services/contact")
const codes = require("../common/codes")



// get All Contacts 
const getAllContacts = (req, res) => { 
    const { sort , limit , skip , filter ,  select } = req.query ;

    ContactsModel.getAllContacts( sort , limit , skip , filter ,  select ).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// get Count
const getCount = (req, res) => { 
    const { filter } = req.query ;

    ContactsModel.getCount( filter ).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// create Contact
const createContact = (req, res) => {
    const {fullname,email,phone,franchise,npa ,naissance } = req.body ;
    ContactsModel.createContact(fullname,email,phone,franchise,npa ,naissance).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

  
// view Contact
const viewContact = (req, res) => {
    const {id} = req.params ;
   
   
    ContactsModel.viewContact(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// update Contact
const updateContact = (req, res) => {
    const {id} = req.params ;
   
   
    ContactsModel.updateContact(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// delete Contact
const deleteContact = (req, res) => {
    const {id} = req.params ;

    ContactsModel.deleteContact(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

module.exports = {
   getAllContacts , deleteContact  , createContact  , getCount , viewContact ,  updateContact
}