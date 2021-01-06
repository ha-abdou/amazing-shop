const express = require('express');
const Product = require('../models/product')
const { navBar } = require('../constants')

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.getOneById(req.params.id)
    const cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : null
    const inCart = cart && !!cart.find(p => p.id === product.id)
  
    res.render('screens/product-details', {
      title: 'Amazing Shop | ' + product.label,
      navBar,
      product,
      inCart
    });
  } catch (e) {
    res.render('error', {
      title: 'Amazing Shop | 404',
      navBar,
      message: 'Product not found',
      error: {
        status: 404
      }
    });
  }
});

module.exports = router;
