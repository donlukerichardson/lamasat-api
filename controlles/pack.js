const PacksServ = require("../services/pack")
const codes = require("../common/codes")



// get All Packs 
const getAllPacks = (req, res) => { 
    const { sort , limit , skip , filter} = req.query ;

    PacksServ.getAllPacks( sort , limit , skip , filter).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}




// create Pack
const createPack = (req, res) => {
    const {name , options , price , oldprice} = req.body ;
    PacksServ.createPack(name , options , price , oldprice).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
} 

// get times
const getAllTimes = (req, res) => {
    const {filter} = req.query ;
    PacksServ.getAllTimes(filter).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// edit Packs
const editPack = (req, res) => {
    const { name , options , price , oldprice} = req.body ;
    const {id} = req.params ;

    PacksServ.editPack(id, name , options , price , oldprice).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// delete Packs
const deletePack = (req, res) => {
    const {id} = req.params ;

    PacksServ.deletePack(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


module.exports = {
   getAllPacks , createPack  , getAllTimes , deletePack , editPack
}