const {Router} = require('express');
const auth = require('../middleware/auth');
const router = Router();
const Product = require('../models/products');
const User = require('../models/user');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./guestCart');

router.post('/create-token', async (req, res) => {
    try {
        const token = uuid.v4(),
              data = {
                  token,
                  products: []
              };

        localStorage.setItem(`${token}`, JSON.stringify( {data} ))
        res.json({ data })
    } catch (err) {
        console.log(err)
    }
  })


function mapCartItems(cart) {
   return cart.items.map( p => ({
       ...p.productId._doc, 
       id: p.productId.id,
       quantity: p.quantity
   }))
}

function computePrice(products) {
    return products.reduce((total, product) => {
        return total += product.price * product.quantity
    }, 0)
}

router.get('/', auth, async (req, res) => {
    const user = await req.user.populate('cart.items.productId').execPopulate(),
          products = mapCartItems(user.cart);
       
    res.render('cart', {
        title: 'Корзина',
        isCart: true,
        products: products,
        user: req.user ? req.user.toObject() : null,
        price: computePrice(products)
    })
})

router.post('/update', async (req, res) => {
    const user = await req.user.populate('cart.items.productId').execPopulate(),
          {productId, quantity} = req.body,
          cart = {
              items: []
          };

        cart.items = await user.cart.items.map( p => {
            if(p.productId.id.toString() === productId.toString()) {
                p.quantity = quantity
                return p
            } else return p
        });
          
        await User.updateOne( {_id: user.id}, {cart} );
        const products = mapCartItems(user.cart);

        const renderCart = {
            products,
            price: computePrice(products),
            csrf: res.locals.csrf
        }
        res.status(200).send('update')
})

router.delete('/remove/:id', auth, async (req, res) => {
    await req.user.removeFromCart(req.params.id)
    const user = await req.user.populate('cart.items.productId').execPopulate();

    const products = mapCartItems(user.cart)
    const cart = {
        products,
        price: computePrice(products),
        csrf: res.locals.csrf
    }
    res.json(cart)
})

router.post('/add', auth, async (req, res) => {
    try {
        const product = await Product.findById(req.body.id);
        const quantity = +req.body.quantity
        await req.user.addToCart(product, quantity)
        res.redirect('/cart')
        
       
    } catch(err) {
        console.log(err)
    }
})

//Неавторизированные пользователи

router.get('/:token', (req, res) => {
    try {
        const guestProfile = JSON.parse(localStorage.getItem(`${req.params.token}`));
        const products = guestProfile ? guestProfile.data.products : [];
        res.render('cart', {
            title: 'Корзина',
            isCart: true,
            token: req.params.token,
            user: req.user ? req.user.toObject() : null,
            products,
            price: computePrice(products)
        })
    } catch(err) {
        console.log(err)
        res.redirect(404, '/404')
    }
})

router.post('/add/:token', async (req, res) => {
    try {
        const { id, quantity } = req.body;
        const product = await Product.findById(id);
        const cart = {
            name: product.name,
            price: product.price,
            img: product.img,
            id,
            quantity: +quantity
        }
        return res.json(cart)
    } catch (err) {
        console.log(err)
    }
})

router.post('/remove/:token/:id', (req, res) => {
    const guestProfile = req.body;
    const token = guestProfile.data.token;
    const products = guestProfile.data.products;
    localStorage.setItem(token, JSON.stringify(guestProfile));
    const cart = {
        products,
        price: computePrice(products),
        csrf: res.locals.csrf
    }
    res.json(cart)
})

router.post('/update/:token', (req, res) => {
    const guestProfile = req.body;
    const value  = JSON.stringify(guestProfile);
    const token = guestProfile.data.token;

    localStorage.setItem(token, value)
    res.status(200).json(guestProfile)
})

module.exports = router