const ContactsServ = require("../services/contact")
const codes = require("../common/codes")



// get All Contacts 
const getAllContacts = (req, res) => { 
    const { sort , limit , skip} = req.query ;

    ContactsServ.getAllContacts( sort , limit , skip).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}




// create Contact
const createContact = (req, res) => {
    const {firstname , lastname , email , phone , subject , message } = req.body ;
    ContactsServ.createContact(firstname , lastname , email , phone , subject , message ).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

module.exports = {
   getAllContacts , createContact 
}