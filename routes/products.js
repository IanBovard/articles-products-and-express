/* jshint esversion:6 */
const db = require('../db/connect.js');
const express = require('express');
const router = express.Router();
const Products = require('../db/products.js');

router.get('/', (req, res) => {
  db.query('SELECT * FROM products')
  .then((prod) => {
    res.render('products/index.hbs', {prod});
  });
});

router.get('/new', (req, res) => {
  res.render('products/new.hbs');
});

router.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  db.query('SELECT * FROM products WHERE id = $1',[id])
  .then((prod) => {
    res.render(`products/product.hbs`, {prod});
  });
});

router.get('/:id/edit', (req, res) => {
  let id = parseInt(req.params.id);
  db.query('SELECT * FROM products WHERE id = $1',[id])
  .then((prod) => {
    res.render(`products/edit.hbs`, {prod});
  });
});

router.post('/', (req, res) => {
  const reqData = Products.convertRequest(req);
  db.query('INSERT INTO products(name, price, inventory) VALUES ($1, $2, $3)', [reqData.name, reqData.price, reqData.inventory])
  .then((products) => {
    res.redirect('/products');
  })
  .catch((err) => {
    res.redirect('/products/new');
  });
});

router.put('/:id', (req, res) => {
  const reqData = Products.convertRequest(req);
  db.query('SELECT * FROM products WHERE id =$1', [reqData.id])
  .then((product) => {
    return Products.putIndex(product, reqData);
  })
  .then((updatedProduct) => {
   let name = updatedProduct[0].name;
   let price = updatedProduct[0].price;
   let inventory = updatedProduct[0].inventory;
   let id = updatedProduct[0].id;
    db.query('UPDATE products SET name = $1, price = $2, inventory = $3 WHERE id = $4', [name, price, inventory, id]);
  })
  .then((redirect) => {
    let id = req.params.id;
    res.redirect(`/products/${id}`);
  })
  .catch((err) => {
    let id = req.params.id;
    res.redirect(`/products/${id}/edit`);
  });
});

/*
router.delete('/:id', (req, res) => {
 let id = parseInt(req.params.id);
 req.body.id = id;
 if (Products.deleteIndex(req.body) > -1){
  console.log('productData',productData);
  res.redirect('/products');
}else{
  res.redirect(`/products/${id}`);
}
});*/

module.exports = router;