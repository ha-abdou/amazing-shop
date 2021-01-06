const express = require('express');
const Product = require('../models/product');

const router = express.Router();

const navBar = [
  {
    path: '',
    name: 'Products',
    active: true
  },
  {
    path: 'cart',
    name: 'Cart'
  },
]
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Amazing Shop | Home',
    products: Product.getAll(),
    navBar
  });
});

module.exports = router;
