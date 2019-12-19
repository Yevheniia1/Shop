//Модули
const express = require('express'),
      exphbs = require('express-handlebars'),
      path = require('path'),
      mongoose = require('mongoose');

//Маршрутизаторы
const homeRouter = require('./routes/home'),
      addRouter = require('./routes/add'),
      productsRouter = require('./routes/products'),
      cartRouter = require('./routes/cart'),
      User = require('./models/user');

//Создание приложения
const app = express();

//Загрузка статических каталогов
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))

//Подключение и регистрация handlebars
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

//Загрузка маршрутизаторов в приложение
app.use( async(req, res, next) => {
    try{
        const user = await User.findById('5dfb920a40bdbd4698a930ac')
        req.user = user;
        next()
    }catch(e) {
        console.log(e)
    }
})
app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/add', addRouter);




//Подключение БД
async function start() {
    try{
        const PORT = process.env.PORT || 3000,
              url = 'mongodb+srv://yevheniia:ujE7KL9yMUxrGaV@cluster0-qvl7t.mongodb.net/shop';

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        const candidate = await User.findOne();
        if(!candidate) {
            const user = new User({
                name: 'Yevheniia',
                email: 'evgenia.potiychuk@gmail.com',
                cart: {items: []}
            });
            await user.save()
        } 
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
        
    } catch(e) {
        console.log(e);
    }
}
start();



