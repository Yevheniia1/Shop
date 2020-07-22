const {Router} = require('express'),
      router = Router(),
      auth = require('../middleware/auth'),
      emailText = require('../email/order'),
      sgMail = require('@sendgrid/mail'),
      User = require('../models/user'),
      Product = require('../models/products'),
      Orders = require('../models/orders'),
      Address = require('../models/addresses'),
      {orderValidatiion} = require ('../utils/validation'),
      LocalStorage = require('node-localstorage').LocalStorage,
      localStorage = new LocalStorage('./guestCart'),
      fs = require('fs'),
      fetch = require('node-fetch'),
      path = require('path'),
      keys = require('../keys')

function mapCartItems(cart) {
return cart.items.map( p => ({
    ...p.productId._doc, 
    id: p.productId.id,
    quantity: p.quantity
}))
}

async function readCitiesFile() {
    return new Promise( (resolve, reject) => {
        fs.readFile(
        path.join(__dirname, '..', 'data', 'nova-poshta', `cities.json`),
        'utf-8',
        (err, content) => {
            if(err) reject(err)
            else resolve(JSON.parse(content))
        })
    })
}

async function readWarehousesFile() {
    return new Promise( (resolve, reject) => {
        fs.readFile(
        path.join(__dirname, '..', 'data', 'nova-poshta', `warehouses.json`),
        'utf-8',
        (err, content) => {
            if(err) reject(err)
            else resolve(JSON.parse(content))
        })
    })
}

function computePrice(products) {
    return products.reduce((total, product) => {
        return total += product.price * product.quantity
    }, 0)
}
async function getDepartments(city) {
    const allWarehouses = await readWarehousesFile();
    const filterСities = allWarehouses.filter( item => item.city === city);
    return filterСities.map( item => item.warehouses)
}

async function getAddress(shippingData) {
    const {shipping, city} = shippingData;

    switch(shipping) {
        case 'npDepartment': {
            const {department} = shippingData;
            return city+' '+department
        }
        break
        case 'npAddress': {
            const {locality, street, apartment} = shippingData
            return city+' '+locality+' '+street+' '+apartment
        }
    }
}


      
router.get('/', async (req, res) => {
    try{
        const user = await req.user.populate('cart.items.productId').execPopulate(),
              products = mapCartItems(user.cart);
        
              
        res.render('checkout', {
            title: "Оформление заказа",
            user: req.user.toObject(),
            products: products,
            price: computePrice(products),
            
        })
    } catch(err) {
        console.log(err)
    }
})

router.get('/:token', async (req, res) => {
    try {
        const guestProfile = JSON.parse(localStorage.getItem(req.params.token)),
              products = guestProfile.data.products;

        res.render('checkout', {
            token: req.params.token,
            user: null,
            products: products,
            price: computePrice(products)

        })
    } catch(err) {
        console.log(err)
    }
})

router.post('/guest:token', orderValidatiion, async (req, res) => {
    try {
        const token = req.params.token,
              shippingData = req.body,
              guestProfile = JSON.parse(localStorage.getItem(token)),
              {name, phone, email, payment, city, surname} = shippingData,
              checkUser = await User.find({ email });

        const address = await getAddress(req.body);


        // if(checkUser) {
        //     const user = {
        //         name: req.body.name,
        //         phone: req.body.phone,
        //         email: req.body.email,
        //     }
        //     res.render('checkout', {
        //         isUser: true,
        //         data: {

        //         }
        //     })
        // }
    async function modificationProduct(product) {
        const model = await Product.findById(product.id.toString())
        const quantity = product.quantity;
        return {
            product: model, 
            quantity: +quantity
        }
    }
    const products = [];

    await guestProfile.data.products.reduce( async (total, product) => {
        return modificationProduct(product).then( item => products.push(item) )
    }, Promise.resolve());


     const order = new Orders({
        user: {
            name, email, phone, token, payment, address, surname
        },
        products,
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

router.post('/', async (req, res) => {

    new Promise( (resolve, reject) => { 
        fs.readFile(
            path.join(__dirname, '..', 'data', 'nova-poshta', 'cities.json'),
            'utf-8',
            (err, content) => {
                if(err) reject(err)
                else resolve(content) 
            })
        })
    .then( cities => JSON.parse(cities))
    .then( cities => {
        const citiesRender = {};
        cities.forEach( item => {
            citiesRender[item.city] = null
        })
        return JSON.stringify(citiesRender)
    })
    .then( result => res.json(result))
    
})

router.post('/calculate', async(req, res) => {
    const {city, payment, cartTotal, checkedOptionName} = req.body;
    const cities = await readCitiesFile();

    const citySender = cities.find( item => item.city === 'Боярка');
    const cityRecipient = cities.find( item => item.city === `${city}`);
    let serviceType, redeliveryCalculate, bodyRequest;

    switch(checkedOptionName.toString()) {
        case 'npDepartment': serviceType = "WarehouseWarehouse";
        break
        case 'npAddress': serviceType = "WarehouseDoors"
        break
    }

    switch(payment.toString()) {
        case 'cash': bodyRequest = {
            "modelName": "InternetDocument",
            "calledMethod": "getDocumentPrice",
            "methodProperties": {
                "CitySender": `${citySender.ref}`,
                "CityRecipient": `${cityRecipient.ref}`,
                "Weight": "0.2",
                "ServiceType": `${serviceType}`,
                "Cost": `${cartTotal}`,
                "CargoType": "Parcel",
                "SeatsAmount": "1",
                "RedeliveryCalculate": {
                    "CargoType": "Money", 
                    "Amount": `${cartTotal}`
                }
            },
            "apiKey": `${keys.NOVA_POSHTA}`
           
        };
        break
        case 'card': bodyRequest = {
            "modelName": "InternetDocument",
            "calledMethod": "getDocumentPrice",
            "methodProperties": {
                "CitySender": `${citySender.ref}`,
                "CityRecipient": `${cityRecipient.ref}`,
                "Weight": "0.2",
                "ServiceType": `${serviceType}`,
                "Cost": `${cartTotal}`,
                "CargoType": "Parcel",
                "SeatsAmount": "1"
            },
            "apiKey": `${keys.NOVA_POSHTA}`
        };
        break
    }

    await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyRequest)
    })
    .then(res => res.json())
    .then(obj => res.json(obj))
    .catch(err => console.log(err))
})

router.post('/shipping', async (req, res) => {
    const city = req.body.selectedCity;

    const warehouses = await getDepartments(city)
  

    res.json(warehouses)
})

router.post('/user', auth, async (req, res) => {
    try{
        const {name, surname, phone, email, payment} = req.body;
        const user = await req.user 
            .populate('cart.items.productId')
            .execPopulate();

        const products = user.cart.items.map( p => ({
            product: {...p.productId._doc}, 
            id: p.productId.id,
            quantity: p.quantity,
        }))

        const address = await getAddress(req.body);

        // const address = new Address({
        //     userId: user._id,
        //     city: req.body.city,
        //     department: req.body.department,
        //     locality: req.body.locality,
        //     street: req.body.street,
        //     apartment: req.body.apartment
        // })

        const order = new Orders({
            user: {
                name, surname, phone, email, payment, address,
                userId: req.user
            },
            products
        })

        await order.save()
        // await address.save()
        await req.user.clearCart()
        const orderId = order._id.toString().slice(0, 7);

        res.render('order-confirmed', {
            title: "Заказ принят",
            id: orderId,
            user: req.user ? req.user.toObject() : null,
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