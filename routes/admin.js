var express = require('express');
var router = express.Router();

/* GET users listing. */

let products = [
  {
    name: "Apple iPhone 14 Pro Max",
    category: "Mobile",
    description: "The Apple iPhone 14 Pro Max is a high-end smartphone with 256GB of storage in a Deep Purple color. It features a large display, powerful processor, and advanced camera system. Other features include 5G connectivity, Face ID, and a long-lasting battery.",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg"
  },
  {
    name: "OnePlus 11R 5G",
    category: "Mobile",
    description: "The OnePlus 11R 5G is a high-end smartphone with 8GB of RAM and 128GB of storage in a stylish Galactic Silver color. It features a 6.67-inch AMOLED display, a Qualcomm Snapdragon 888 processor, and a triple-camera setup on the back. Other features include 5G connectivity, an in-display fingerprint sensor, and a 4,500mAh battery with fast charging.",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/613SAOPmLeL._SX569_.jpg"
  },
  {
    name: "Oppo F21s Pro 5G",
    category: "Mobile",
    description: "The Oppo F21s Pro 5G is a smartphone in Dawnlight Gold color with 8GB of RAM and 128GB of storage. It supports 5G connectivity and features a large display, a powerful processor, and a triple-camera setup on the back. Other features include a long-lasting battery, fast charging, and a sleek design.",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/818FEaCSZYL._SX679_.jpg"
  },
  {
    name: "Redmi Note 11T 5G",
    category: "Mobile",
    description: "The Redmi Note 11T 5G is a smartphone in Stardust White color with 8GB of RAM and 128GB of storage. It supports 5G connectivity and features a large display, a powerful processor, and a triple-camera setup on the back. Other features include a long-lasting battery, fast charging, and a sleek design.",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/8118Gc5h7QL._SX679_.jpg"
  }
]

router.get('/', function (req, res, next) {
  res.render('admin/view-products', { admin: true, products });
});

router.get('/add-product',(req,res)=>{
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files);
})

module.exports = router;
