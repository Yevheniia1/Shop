const {Router} = require('express');
const auth = require('../middleware/auth');
const Products = require('../models/products');
const keys = require('../keys/index');
const {productValidation} = require('../utils/validation');
const {validationResult} = require('express-validator');

const router = Router();

function isAdmin(id) {
    return keys.ADMIN_ID.indexOf(id.toString()) >= 0;
}

router.get('/', async (req, res) => {
    try {
        const productsList = await Products.find();
        res.render('products', {
            title: 'Товары',
            isProducts: true,
            userId: req.user ? req.user._id.toString() : null,
            productsList,
        })
    } catch(err) {
        console.log(err)
    }
})

router.get('/:id/edit', auth, async (req, res) => {
    try{
        if(!req.query.allow) { 
            return res.redirect('/')
        }
    
        const product = await Products.findById(req.params.id);

        if(!isAdmin(req.user._id)) {
           return res.redirect('/products')
        }
    
        res.render('product-edit', {
            title: `Редактировать ${product.title}`,
            error: req.flash('error'),
            product
        })
    } catch(err) {
        console.log(err)
    }
})

router.post('/edit', auth, productValidation, async (req, res) => {
    try {
        const {id} = req.body;
        delete req.body.id;

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            req.flash('error', errors.array()[0].msg)
            return res.status(422).redirect(`/products/${id}/edit?allow=true`)
        }

        if(isAdmin(req.user._id)) {
            await Products.findByIdAndUpdate(id, req.body);
        }

        res.redirect('/products')
    } catch(err) {
        console.log(err)
    }
})

router.post('/remove', auth, async (req, res) => {
    try {
        if(isAdmin(req.user._id)) {
            await Products.deleteOne({_id: req.body.id});
        }
        res.redirect('/products')
    } catch(e) {
        console.log(e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        res.render('product', {
            layout: 'empty',
            section: 'products',
            title: `Товар ${product.title}`,
            product
        })
    } catch(err) {
        console.log(err)
    }
})

module.exports = router