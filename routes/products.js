/* jshint esversion:6 */
const express = require('express');
const router = express.Router();
const Products = require('../db/products.js');

let productData = {
  product : Products.getData()
};

router.get('/', (req, res) => {
  res.render('products/index.hbs', productData);
});
router.get('/new', (req, res) => {
  res.render('products/new.hbs');
});

router.post('/', (req, res) => {
  req.body.price = parseInt(req.body.price);
  req.body.inventory = parseInt(req.body.inventory);
  if (req.body.name && typeof req.body.price === 'number' && typeof req.body.inventory === 'number'){
    if (Products.postData(req.body)){
      Products.postData(req.body);
      res.redirect('/products');
    }else{
      res.redirect('/products/new');
    }
  }
});

router.put('/:id', (req, res) => {

});
module.exports = router;