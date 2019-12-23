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
            required: true,
            ref: 'User'
        }
        
    },
    data: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Orders', ordersSchema)