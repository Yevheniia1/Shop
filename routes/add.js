const {Router} = require('express');
const auth = require('../middleware/auth');
const Product = require('../models/products');
const {productValidation} = require('../utils/validation');
const {validationResult} = require('express-validator');

const router = Router();

router.get('/', auth, (req, res) => {
    res.render('add', {
        title: 'Добавить товар',
        user: req.user ? req.user.toObject() : null,
        isAdd: true
    })
})

router.post('/', auth, productValidation, async (req, res) => {
    try {
        const errors = validationResult(req);
        let imgs = req.files.map( image => image.filename);

        if(!errors.isEmpty()) {
            return res.status(422).render('add', {
                title: 'Добавить товар',
                isAdd: true,
                error: errors.array()[0].msg,
                data: {
                    name: req.body.title,
                    price: req.body.price,
                    img: imgs,
                    description: req.body.description
                }
            })
        }


        const product = new Product({
            name: req.body.title,
            price: req.body.price,
            img: imgs,
            userId: req.user._id,
            category: req.body.category,
            description: req.body.description
        })
        await product.save();
        res.redirect('/products')
    } catch(err) {
        console.log(err)
    }
})

module.exports = router