const {Router} = require('express');
const Orders = require('../models/orders');
const auth = require('../middleware/auth');
const router = Router();


function computePrice(products) {
    return products.reduce((total, item) => {
        return total += item.product.price * item.quantity
    }, 0)
}


router.get('/', auth, async(req, res) => {
    try{
        const orders = await Orders.find({'user.userId': req.user._id})
            .populate('user.userId')
        res.render('orders', {
            isOrders: true,
            title: 'Заказы',
            user: req.user ? req.user.toObject() : null,
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


module.exports = router