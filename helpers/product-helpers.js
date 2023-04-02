var db = require('../config/connection')
module.exports={
    addProduct:(product)=>{
        db.get().collection('product').insertOne(product).then((data)=>{
            console.log(data);
        })
    }
}