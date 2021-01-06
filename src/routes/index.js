const express = require('express');
const Product = require('../models/product');
const { navBar } = require('../constants')

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('screens/products-list', {
    title: 'Amazing Shop | Home',
    products: await Product.getAll(['img', "label", 'price', 'discount', 'shortDescription', 'id']),
    navBar,
    activeNavBarTab: "products"
  });
});

module.exports = router;
