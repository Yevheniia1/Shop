const {Router} = require('express');
const Products = require('../models/products')

const router = Router();

router.get('/', async (req, res) => {
    const productsList = await Products.find();
    res.render('products', {
        title: 'Товары',
        isProducts: true,
        productsList
    })
})

router.get('/:id/edit', async (req, res) => {
    if(!req.query.allow) { 
        return res.redirect('/')
    }

    const product = await Products.findById(req.params.id);

    res.render('product-edit', {
        title: `Редактировать ${product.title}`,
        product
    })
})

router.post('/edit', async (req, res) => {
    const {id} = req.body;
    delete req.body.id;
    await Products.findByIdAndUpdate(id, req.body);

    res.redirect('/products')
})

router.get('/:id', async (req, res) => {
    const product = await Products.findById(req.params.id);
    res.render('product', {
        layout: 'empty',
        section: 'products',
        title: `Товар ${product.title}`,
        product
    })
})

module.exports = router