const express = require('express');
const Product = require('../models/product');

const router = express.Router();

const navBar = [
  {
    key: 'products',
    path: '',
    name: 'Products'
  },
  {
    key: 'cart',
    path: 'cart',
    name: 'Cart'
  },
]

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Amazing Shop | Home',
    products: Product.getAll(['img', "label", 'price', 'discount', 'shortDescription', 'id']),
    navBar,
    activeNavBarTab: "products"
  });
});

module.exports = router;
