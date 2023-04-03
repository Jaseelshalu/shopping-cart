var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { products, admin: false });
});

module.exports = router;
