//Модули
const express = require('express'),
      exphbs = require('express-handlebars'),
      path = require('path'),
      mongoose = require('mongoose'),
      session = require('express-session'),
      MongoStore = require('connect-mongodb-session')(session),
      csrf = require('csurf'),
      flash = require('connect-flash'),
      keys = require('./keys'),
      client = require('@sendgrid/client');


//Маршрутизаторы
const homeRouter = require('./routes/home'),
      addRouter = require('./routes/add'),
      productsRouter = require('./routes/products'),
      cartRouter = require('./routes/cart'),
      User = require('./models/user'),
      ordersRouter = require('./routes/orders'),
      authRouter = require('./routes/auth');

//Middleware
const varMiddleware = require('./middleware/variables'),
      userMiddlewear = require('./middleware/user');

//Создание приложения
const app = express();

//Загрузка статических каталогов
app.use(express.static(path.join(__dirname, 'public')));

const store = new MongoStore({
    collection: 'session',
    uri: keys.MONGODB_URI
})

app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: keys.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store
}))
app.use(csrf())
app.use(flash())
app.use(varMiddleware)
app.use(userMiddlewear)



//Подключение и регистрация handlebars
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
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

//SENDGRID

client.setApiKey(keys.SENDGRID_API_KEY); 
const request = {
  method: 'GET',
  url: '/v3/api_keys'
};
client.request(request)
.then(([response, body]) => {
  console.log(response.statusCode);
  console.log(body);
})

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
start();



