/* jshint esversion:6 */
const db = require('../db/connect.js');
const express = require('express');
const router = express.Router();
const articles = require('../db/articles.js');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

let articleData = {
  articles : articles.getArticle()
};

router.get('/', (req, res) => {
  res.render('articles/index.hbs');
});
router.get('/new', (req, res) => {
  res.render('articles/new.hbs');
});

router.post('/', (req, res) => {
  req.body.urlTitle = encodeURI(req.body.title);
  let body = req.body;
  if (articles.getIndex(body) === -1 && articles.validateInput(body)){
    articles.postArticle(body);
    res.redirect('/articles');
  }else{
    res.redirect('/articles/new');
  }
});

router.put('/:title', (req, res) => {
  console.log(articles.getIndex(req.body));
});

module.exports = router;