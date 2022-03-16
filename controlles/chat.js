const ChatsModel = require("../services/chat")
const codes = require("../common/codes")


// get All chats
const getAllChats = (req, res) => {
    const { sort , limit , skip , filter ,  select , expend } = req.query ;

    ChatsModel.getAllChats( sort , limit , skip , filter ,  select , expend ).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// get Count
const getCount = (req, res) => {
    const { filter } = req.query ;

    ChatsModel.getCount( filter ).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// create
const create = (req, res) => {
    const {fullname ,email , user_id , message }  = req.body ;

    ChatsModel.create(fullname ,email , user_id , message).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// reply
const reply = (req, res) => {
    const {reply_message} = req.body ;
    const {id} = req.params ;

    ChatsModel.reply(id , reply_message ).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// delete
const Delete = (req, res) => {
    const {id} = req.params ;

    ChatsModel.Delete(id ).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


module.exports = {
     create ,
     reply , 
     getCount ,
     Delete ,
     getAllChats
} 