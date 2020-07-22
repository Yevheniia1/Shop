const {Schema, model} = require('mongoose');

const ordersSchema = new Schema({
    products: [{
        product: {
            type: Object,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        
    }],
    user: {
        name: String,
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }, 
        surname: String,
        email: String,
        phone: Number,
        payment: String,
        address: String,
        token: String,
    },
    date: {
        type: Date,
        default: new Date()
    },
    
})

module.exports = model('Orders', ordersSchema)