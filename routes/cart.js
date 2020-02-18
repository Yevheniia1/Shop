const {Router} = require('express');
const auth = require('../middleware/auth');
const router = Router();
const Product = require('../models/products');

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
    const user = await req.user
    .populate('cart.items.productId')
    .execPopulate();
    const products = mapCartItems(user.cart)
    res.render('cart', {
        title: 'Корзина',
        isCart: true,
        products: products,
        price: computePrice(products)
    })
})

router.delete('/remove/:id', auth, async (req, res) => {
    await req.user.removeFromCart(req.params.id)
    const user = await req.user.populate('cart.items.productId').execPopulate();

    const products = mapCartItems(user.cart)
    const cart = {
        products,
        price: computePrice(products)
    }
    res.json(cart)
})

router.post('/add', auth, async (req, res) => {
    const product = await Product.findById(req.body.id);
    const quantity = req.body.quantity
    await req.user.addToCart(product, quantity)
    res.redirect('/cart')
})

module.exports = router