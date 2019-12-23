const {Router} = require('express');
const auth = require('../middleware/auth');
const Product = require('../models/products');

const router = Router();

router.get('/', auth, (req, res) => {
    res.render('add', {
        title: 'Добавить товар',
        isAdd: true
    })
})

router.post('/', auth, async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        img: req.body.img,
        userId: req.user._id
    })

    try {
        await product.save();
        res.redirect('/products')
    } catch(e) {
        console.log(e)
    }
})

module.exports = router