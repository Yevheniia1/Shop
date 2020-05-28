const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: Array,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category:  {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

productSchema.method('toClient', function() {
    const product = this.toObject();

    product.id = product._id
    delete product._id
 
    return product
})

module.exports = model('Product', productSchema)