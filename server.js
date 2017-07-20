/* jshint esversion:6 */
const express = require('express');
const exphbs = require ('express-handlebars');
const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout :'main',
  extname : 'hbs'
});

const server = app.listen(PORT, () => {
  process.stdout.write(`listening for port ${PORT}\n`);
});