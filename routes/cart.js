const {Router} = require('express');
const router = Router();

const Cart = require('../models/cart');
const Product = require('../models/products');

router.get('/', async (req, res) => {
    const cart = await Cart.fetch();
    res.render('cart', {
        title: 'Корзина',
        isCart: true,
        products: cart.products,
        price: cart.price,
        cart
    })
})

router.delete('/remove/:id', async (req, res) => {
    const cart = await Cart.remove(req.params.id);
    res.json(cart)
})

router.post('/add', async (req, res) => {
    const product = await Product.getById(req.body.id);
    product.quantity = req.body.quantity;
    await Cart.add(product)
    res.redirect('/cart')
})

module.exports = router