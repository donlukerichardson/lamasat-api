const PacksRquest = require("../models/pack")



// getAllPacks
const getAllPacks = (sort = '{"createdAt" : 1}', limit = 0 , skip = 0 , filter = '{"firstname" : { "$ne": "xxxlxxx" }}',) => {
    return new Promise((resolve, reject) => {

        PacksRquest.find({}, (errFind, Packs) => {

            if (errFind) {console.log(errFind);
                reject(errFind)
                return
            }

            if (Packs.length <= 0) { 
                reject("there are no Packs")
                return
            }

            resolve({ skip  , limit , count : Packs.length , values : Packs })


        })
            .sort(JSON.parse(sort))
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .setQuery({ ...JSON.parse(filter) })


    })
}




// create Pack
const createPack = (name , options , price , oldprice) => {
    return new Promise((resolve, reject) => {
        //create
        PacksRquest.create({
            name , options , price , oldprice
        }, (errCreate, doc) => {
            if (errCreate) {
                reject(errCreate)
                return
            }

             resolve("created")
        }) 

    })
}


// update Pack
const editPack = (id, name , options , price , oldprice) => {


    return new Promise((resolve, reject) => {

        // check id
        PacksRquest.findOne({}, (errFind, caty) => {
            if (errFind)
                reject(errFind)

            if (!caty) {
                reject("id not exist")

            } else {

                //update

                PacksRquest.updateOne({}, {
                    name , options , price , oldprice
                    , updatedAt: Date.now()
                }, (errUpdate, doc) => {
                    if (errUpdate) {
                        reject(errUpdate)
                        return
                    }

                    if (doc.modifiedCount > 0) {
                         resolve("modifed")

                    } else {
                        reject("something went wrong")
                    }

                }).where("_id").equals(id)

            }//else
        }).where("_id").equals(id)

    })
}



// delete Pack
const deletePack = (id) => {

    return new Promise((resolve, reject) => {

        // check id
        PacksRquest.findOne({}, (errFind, caty) => {
            if (errFind)
                reject(errFind)

            if (!caty) {
                reject("id not exist")

            } else {
                //delete
                PacksRquest.deleteOne({}
                    , (errUpdate, doc) => {
                        if (errUpdate) {
                            reject(errUpdate)
                            return
                        }

                        if (doc.deletedCount > 0) {
                            resolve("deleted")

                        } else {
                            reject("something went wrong")
                        }

                    }).where("_id").equals(id)
            }//else
        }).where("_id").equals(id)

    })
}


module.exports = {
    getAllPacks, createPack  , deletePack , editPack
}