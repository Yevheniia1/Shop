const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        items: [
            {
                quantity: {
                    type: Number,
                    required: true,
                    default: 1
                },
                productId: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product'
                }
            }
        ]
    }

})
userSchema.methods.addToCart = function(product, quantity) {
    const items = [...this.cart.items];
    const index = items.findIndex( p => {
        return p.productId.toString() === product._id.toString()
    })
    if(index >= 0) {
        items[index].quantity = items[index].quantity + +quantity
    } else {
        items.push({
            productId: product._id,
            quantity: quantity
        })
    }
    
    
    this.cart = {items}
    return this.save()
}

userSchema.methods.removeFromCart = function(id) {
    let items = [...this.cart.items];

    items = items.filter( p => p.productId.toString() !== id.toString())

    this.cart = {items};
    return this.save()
}

userSchema.methods.clearCart = function() {
    this.cart = {items: []}
    return this.save()
}

module.exports = model('User', userSchema)