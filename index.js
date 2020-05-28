const express = require('express'),
      exphbs = require('express-handlebars'),
      path = require('path'),
      mongoose = require('mongoose'),
      session = require('express-session'),
      MongoStore = require('connect-mongodb-session')(session),
      csrf = require('csurf'),
      flash = require('connect-flash'),
      helmet = require('helmet'),
      compression = require('compression'),
      keys = require('./keys'),
      sgMail = require('@sendgrid/mail'),
      hbsHelpers = require('./utils/helpers-hbs'),
      errorHandler = require('./middleware/error'),
      webpack = require('webpack');


//Маршрутизаторы
const homeRouter = require('./routes/home'),
      addRouter = require('./routes/add'),
      productsRouter = require('./routes/products'),
      cartRouter = require('./routes/cart'),
      ordersRouter = require('./routes/orders'),
      checkoutRouter = require('./routes/checkout'),
      authRouter = require('./routes/auth'),
      profileRouter = require('./routes/profile');

//Middleware
const varMiddleware = require('./middleware/variables'),
      userMiddlewear = require('./middleware/user'),
      fileMiddlewear = require('./middleware/file'),
      webpackDevMiddleware = require('webpack-dev-middleware');

//Создание приложения
const app = express();

const config = require('./webpack-front.config.js');
const compiler = webpack(config);

//Загрузка статических каталогов
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

const store = new MongoStore({
    collection: 'session',
    uri: keys.MONGODB_URI,
})

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(session({
    secret: keys.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store
}))
app.use(fileMiddlewear.array('img', 10))
app.use(csrf())
app.use(flash())
app.use(helmet())
app.use(compression())
app.use(varMiddleware)
app.use(userMiddlewear)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));


//Подключение и регистрация handlebars
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: hbsHelpers,
});

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

//Загрузка маршрутизаторов в приложение

app.use('/', homeRouter)
app.use('/products', productsRouter)
app.use('/cart', cartRouter)
app.use('/add', addRouter)
app.use('/orders', ordersRouter)
app.use('/auth', authRouter)
app.use('/profile', profileRouter)
app.use('/checkout', checkoutRouter)

app.use(errorHandler)

//SENDGRID
sgMail.setApiKey(keys.SENDGRID_API_KEY);

//Подключение БД
async function start() {
    try{
        const PORT = process.env.PORT || 3000,
              url = keys.MONGODB_URI;

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
        
    } catch(e) {
        console.log(e);
    }
}


// Загрузка списка контрагентов
// const fetch = require('node-fetch');

// fetch('https://api.novaposhta.ua/v2.0/json/', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         "apiKey": "c85d313cb51f8ed29a4b699cceacb153",
//          "modelName": "Counterparty",
//          "calledMethod": "getCounterparties",
//          "methodProperties": {
//          "CounterpartyProperty": "Recipient",
//          }
//         }
//         )
// })
// .then(res => res.json())
// .then(res => console.log(res))
  

start();





