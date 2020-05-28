function mergeCarts(products, addProduct) {
    const inCart = products.find(p => p.id.toString() === addProduct.id.toString() );
    if(inCart) {
        inCart.quantity = +inCart.quantity + +addProduct.quantity;
    } else {
        products.push(addProduct)
    }
    return products
}
export {mergeCarts}