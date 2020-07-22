const {Schema, model} = require('mongoose');

const addressSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    city: {
        type: String,
        required: true
    },
    department: String,
    locality: String,
    street: String,
    apartment: Number
})

module.exports = model('Address', addressSchema)