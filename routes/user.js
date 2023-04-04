var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')
var userHelpers = require('../helpers/user-helpers');
const { response } = require('../../../Web Development/shopping-cart/app');

/* GET home page. */

router.get('/', function (req, res, next) {
  let user = req.session.user
  productHelpers.getAllProducts().then((products) => {
    res.render('user/view-products', { products, admin: false, user });
  })
});

router.get('/login', (req, res) => {
  res.render('user/login')
})

router.post('/login', (req, res) => {
  userHelpers.doLogin(req.body).then((response) => {
    if (response.status) {
      req.session.user = response.user
      req.session.loggedIn = true
      res.redirect('/')
    } else {
      res.redirect('/login')
    }
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

router.get('/signup', (req, res) => {
  res.render('user/signup')
})

router.post('/signup', (req, res) => {
  userHelpers.doSigup(req.body).then((response) => {
    if (response.status) {
      req.session.user = response.user
      req.session.loggedIn = true
      res.redirect('/')
    } else {
      res.redirect('/login')
    }
  })
})

module.exports = router;
