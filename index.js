const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const homeRouter = require('./routes/home'),
      addRouter = require('./routes/add'),
      productsRouter = require('./routes/products'),
      cartRouter = require('./routes/cart')

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

const app = express();

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))
app.use('/', homeRouter);
app.use('/add', addRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})