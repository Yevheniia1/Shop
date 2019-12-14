const {Router} = require('express');
const Products = require('../models/products')

const router = Router();

router.get('/', async (req, res) => {
    const productsList = await Products.getAll();
    res.render('products', {
        title: 'Товары',
        isProducts: true,
        productsList
    })
})

module.exports = router