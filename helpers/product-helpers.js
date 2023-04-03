var db = require('../config/connection')
var collection = require('../config/collection')
module.exports = {
    addProduct: (product) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data) => {
                resolve(data.insertedId)
            })
        })
    }
}