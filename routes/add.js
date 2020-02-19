const {Router} = require('express');
const auth = require('../middleware/auth');
const Product = require('../models/products');
const {productValidation} = require('../utils/validation');
const {validationResult} = require('express-validator');

const router = Router();

router.get('/', auth, (req, res) => {
    res.render('add', {
        title: 'Добавить товар',
        isAdd: true
    })
})

router.post('/', auth, productValidation, async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).render('add', {
                title: 'Добавить товар',
                isAdd: true,
                error: errors.array()[0].msg,
                data: {
                    title: req.body.title,
                    price: req.body.price,
                    img: req.body.img
                }
            })
        }

        const product = new Product({
            title: req.body.title,
            price: req.body.price,
            img: req.body.img,
            userId: req.user._id
        })
        await product.save();
        res.redirect('/products')
    } catch(err) {
        console.log(err)
    }
})

module.exports = router