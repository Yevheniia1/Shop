const {Router} = require('express');
const Orders = require('../models/orders');
const auth = require('../middleware/auth');
const router = Router();

router.get('/', auth, async(req, res) => {
    try{
        const orders = await Orders.find({'user.userId': req.user._id})
            .populate('user.userId')
        res.render('orders', {
            isOrders: true,
            title: 'Заказы',
            orders: orders.map( o => ({
                ...o._doc,
                price: o.products.reduce((total, p) => {
                    return total += p.quantity * p.product.price
                }, 0)
            }))
        })
    } catch(e) {
        console.log(e)
    }
})

router.post('/', auth, async (req, res) => {
    try{
        const user = await req.user 
            .populate('cart.items.productId')
            .execPopulate();

        const products = user.cart.items.map( p => ({
            product: {...p.productId._doc}, 
            id: p.productId.id,
            quantity: p.quantity,
        }))

        const order = new Orders({
            user: {
                name: req.user.name,
                userId: req.user
            },
            products: products
        })

        await order.save()
        await req.user.clearCart()

        res.redirect('/orders')
    } catch(e) {
        console.log(e)
    }
    
})

module.exports = router