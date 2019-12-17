const path = require('path'),
      fs = require('fs'),
      absolutePathToJSON = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json')


class Cart {
    static async add(product){
        const cart = await Cart.fetch();
        const index = cart.products.findIndex( p => p.id === product.id);
        const candidate = cart.products[index];

        if(candidate) {
            candidate.quantity = +candidate.quantity + +product.quantity;
            cart.products[index] = candidate;
        } else {
            cart.products.push(product);
        }

        cart.price += +product.price * +product.quantity;

        return new Promise( (resolve, reject) => {
            fs.writeFile( 
                absolutePathToJSON, 
                JSON.stringify(cart),
                (err) => {
                    if(err) {
                        return reject(err)
                    } else {
                        resolve()
                    }
                }
                )
        })

    }
    
    static async remove(id) {
        const cart = await Cart.fetch();
        const productToDelete = cart.products.find(p => p.id === id);
        cart.products = cart.products.filter(p => p.id !== id);
        
        cart.price -= +productToDelete.price * +productToDelete.quantity

        return new Promise( (resolve, reject) => {
            fs.writeFile( 
                absolutePathToJSON, 
                JSON.stringify(cart),
                (err) => {
                    if(err) {
                        return reject(err)
                    } else {
                        resolve(cart)
                    }
                }
            )
        })
    }

    static async fetch() {
        return new Promise( (resolve, reject) => {
            fs.readFile(
                absolutePathToJSON,
                'utf-8',
                (err, content) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }
}

module.exports = Cart