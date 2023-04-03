var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')

/* GET users listing. */

router.get('/', function (req, res, next) {
  res.render('admin/view-products', { admin: true, products });
});

router.get('/add-product', (req, res) => {
  res.render('admin/add-product')
})

router.post('/add-product', (req, res) => {
  let image = req.files.Image
  productHelpers.addProduct(req.body).then((id) => {
    image.mv(`./public/images/product-images/${id}.jpg`, (err) => {
      if (!err) res.redirect('/admin')
      else console.log(err);
    })
  })
})

module.exports = router;
