var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')

/* GET home page. */

router.get('/', function (req, res, next) {
  productHelpers.getAllProducts().then((products) => {
    res.render('user/view-products', { products, admin: false });
  })
});

router.get('/login',(req,res)=>{
  res.render('user/login')
})

module.exports = router;
