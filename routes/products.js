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
router.get('/:id', (req, res) => {
  res.render(`products/product.hbs`);
});
router.get('/:id/edit', (req, res) => {
  res.render(`products/edit.hbs`);
});

router.post('/', (req, res) => {
  req.body.price = parseFloat(req.body.price);
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
  let id = parseInt(req.params.id);
  req.body.price = parseFloat(req.body.price);
  req.body.inventory = parseInt(req.body.inventory);
  req.body.id = id;
  if (Products.putIndex(req.body) > -1){
    res.redirect(`/products/${id}`);
  }else{
    res.redirect(`/products/${id}/edit`);
  }
});

router.delete('/:id', (req, res) => {
 let id = parseInt(req.params.id);
 req.body.id = id;
 if (Products.deleteIndex(req.body) > -1){
  console.log('productData',productData);
  res.redirect('/products');
}else{
  res.redirect(`/products/${id}`);
}
});



module.exports = router;