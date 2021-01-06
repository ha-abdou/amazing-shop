const express = require('express');
const Product = require('../models/product')
const { navBar } = require('../constants')

const router = express.Router();

router.get('/', async (req, res) => {
  const cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : []

  res.render('screens/cart', {
    title: 'Amazing Shop | Cart',
    navBar,
    cart,
    activeNavBarTab: "cart"
  });
});

module.exports = router;
