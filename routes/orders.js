const {Router} = require('express');
const Orders = require('../models/orders');
const auth = require('../middleware/auth');
const router = Router();
const emailText = require('../email/order');
const sgMail = require('@sendgrid/mail');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');
const Product = require('../models/products');
const {orderValidatiion} = require ('../utils/validation');

function computePrice(products) {
    return products.reduce((total, item) => {
        return total += item.product.price * item.quantity
    }, 0)
}

router.get('/user', (req, res) => {
    try{
        res.render('user-order', {
            title: "Оформление заказа",
            
        })
    } catch(err) {
        console
    }
})

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


router.get('/:token', (req, res) => {
    try {
        const guestProfile = req.body;
        res.render('guest-order', {
            token: req.params.token
        })
    }catch(err) {
        console.log(err)
    }
})

router.post('/guest-order/save:token', orderValidatiion, async (req, res) => {
    try {
        console.log(req.body)
        const token = req.params.token,
              guestProfile = JSON.parse(localStorage.getItem(token)),
              name = req.body.name,
              phone = req.body.phone,
              email = req.body.email,
              city = req.body.city,
              delivery = req.body.delivery;

    async function modificationProduct(product) {
        const productModel = await Product.findById(product.id.toString())
        const quantity = product.quantity;
        return {
            product: productModel, 
            quantity: +quantity
        }
    }
    const products = [];

    const product = await guestProfile.data.products.reduce( async (total, product) => {
        return modificationProduct(product).then( item => products.push(item) )
    }, Promise.resolve());


     const order = new Orders({
        guest: {
            name, email, phone, token
        },
        products
    })

    await order.save()

    const orderId = order._id.toString().slice(0, 7);
    guestProfile.data.products = [];
    localStorage.setItem(token, JSON.stringify(guestProfile))
    res.render('order-confirmed', {
        title: "Заказ принят",
        id: orderId
    })

    await sgMail.send(emailText( {
        name, 
        email, 
        price: computePrice(products), 
        date: order.date, 
        orderId
    } ))

    } catch(err) {
        console.log(err)
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
        const orderId = order._id.toString().slice(0, 7);

        res.render('order-confirmed', {
            title: "Заказ принят",
            id: orderId
        })

        await sgMail.send(emailText( {
            name: req.user.name, 
            email: req.user.email, 
            price: computePrice(products), 
            date: order.date, 
            orderId
        } ))
        
    } catch(e) {
        console.log(e)
    }
    
})

module.exports = router