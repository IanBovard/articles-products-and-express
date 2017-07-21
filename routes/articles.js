/* jshint esversion:6 */
const express = require('express');
const router = express.Router();
const articles = require('../db/articles.js');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

module.exports = router;