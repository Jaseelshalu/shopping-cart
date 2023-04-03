var db = require('../config/connection')
var collection = require('../config/collection')
var bcrypt = require('bcrypt')
module.exports = {
    doSigup: (userData) => {
        return new Promise(async (resolve, reject) => {
            userData.Password = await bcrypt.hash(userData.Password, 10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then(() => {
                resolve()
            })
        })
    }
}