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
    },
    guest: {
        name: String,
        email: String,
        phone: Number,
        token: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Orders', ordersSchema)