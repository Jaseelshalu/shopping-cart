var db = require('../config/connection')
// var collection = require('../config/collection')
const collection = {
    PRODUCT_COLLECTION: 'product',
    USER_COLLECTION: 'user',
    CART_COLLECTION: 'cart',
    ORDER_COLLECTION: 'order',
    ADMIN_COLLECTION: 'admin'
};
module.exports = {
    addProduct: (product) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data) => {
                resolve(data.insertedId)
            })
        })
    },
    getAllProducts: () => {
        return new Promise(async (resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).find().toArray().then((products) => {
            resolve(products)
            })
        })
    }
}
