const {Router} = require('express');
const Product = require('../models/products');

const router = Router();

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить товар',
        isAdd: true
    })
})

router.post('/', (req, res) => {
    
    const product = new Product(req.body.title, req.body.price, req.body.img);
    product.save();
    res.redirect('/products')
})

module.exports = router