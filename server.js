/* jshint esversion:6 */
const express = require('express');
const exphbs = require ('express-handlebars');
const PORT = process.env.PORT || 8080;
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const articleRoutes = require('./routes/articles');


const app = express();
const hbs = exphbs.create({
  defaultLayout :'main',
  extname : 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/articles', articleRoutes);

const server = app.listen(PORT, () => {
  process.stdout.write(`listening for port ${PORT}\n`);
});