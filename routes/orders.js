const {Router} = require('express');
const Orders = require('../models/orders');
const auth = require('../middleware/auth');
const router = Router();


function computePrice(products) {
    return products.reduce((total, item) => {
        return total += item.product.price * item.quantity
    }, 0)
}

function formatDate(date) {
    const month = date.getMonth(),
          day = date.getDate(),
          year = date.getFullYear(),
          hours = date.getHours(),
          minutes = date.getMinutes().toString().length === 2 ? date.getMinutes() : `0${date.getMinutes()}`,
          listOfMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    return `${day} ${listOfMonths[month]} ${year} ${hours}:${minutes}`
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
                formatDate: formatDate(o.date),
                price: computePrice(o.products)
            }))
        })
    } catch(e) {
        console.log(e)
    }
})

router.get('/all/read', auth, async (req, res) => {
    try{
        if(!req.query.allow) {
            res.redirect('/products')
        } 

        const now = new Date();
        const timePeriod = 7; //В днях
        const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - timePeriod, 0, 0, 0, 0);

        const orders = await Orders.find({'date': {"$gte": start, "$lt": now}});
        res.render('orders', {
        isOrders: true,
        title: 'Заказы',
        user: req.user ? req.user.toObject() : null,
        orders: orders.map( o => ({
            ...o._doc,
            formatDate: formatDate(o.date),
            price: computePrice(o.products)
        })).reverse()
    })
    } catch(err){
        console.log(err)
    }
})


module.exports = router