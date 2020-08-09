const {Router} = require('express');
const router = Router();
const Products = require('../models/products');


router.get('/', async (req, res) => {
    const productsList = await Products.find().limit(6);
    res.render('home', {
        title: 'Главная страница',
        isHome: true,
        user: req.user ? req.user.toObject() : null,
        orderEnd: false,
        layout: 'withoutContainer',
        productsList
    })
})

module.exports = router