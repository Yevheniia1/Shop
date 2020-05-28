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
            mainTitle: `Маски`,
            isProducts: true,
            user: req.user ? req.user.toObject() : null,
            productsList,
        })
    } catch(err) {
        console.log(err)
    }
})

router.get('/category/:category', async (req, res) => {
    try {
        const productsList = await Products.find( {category: req.params.category} );
        res.render('products', {
            mainTitle: `${req.params.category}`,
            title: `Маски`,
            isProducts: true,
            user: req.user ? req.user.toObject() : null,
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
            user: req.user ? req.user.toObject() : null,
            product
        })
    } catch(err) {
        console.log(err)
    }
})


router.post('/edit', auth, productValidation,  async (req, res) => {
        try {
        const {id} = req.body;
        
        delete req.body.id;

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            req.flash('error', errors.array()[0].msg)
            return res.status(422).redirect(`/products/${id}/edit?allow=true`)
        }

        if(isAdmin(req.user._id)) {
            const product = await Products.findById(id);
            const fileData = req.file;

            if(!fileData) {
                res.redirect('/products')
                return console.log('Ошибка загрузки изображения')
            }
            const toChange = {
                name: req.body.title,
                price: req.body.price,
                img: fileData.path
            }

            Object.assign(product, toChange)
            await product.save()
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
            section: 'products',
            title: `Товар ${product.name}`,
            user: req.user ? req.user.toObject() : null,
            img: product.img,
            description: product.description,
            category: product.category,
            name: product.name,
            price: product.price,
            id: product.id,
            productPage: true
            
        })
    } catch(err) {
        console.log(err)
    }
})


module.exports = router