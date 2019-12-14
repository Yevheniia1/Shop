const uuid = require('uuid/v4'),
      fs = require('fs'),
      path = require('path');


class Product {
    constructor(title, price, img) {
        this.title = title
        this.price = price
        this.img = img
        this.id = uuid()
    }

    createObj() {
        return {
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id
        }
    }

    async save() {
        const product = await Product.getAll();
        product.push(this.createObj())

        return new Promise( (resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                JSON.stringify(product),
                (err) => {
                    if(err) reject(err)
                    else resolve()
                }
            )
        })
    }

    static getAll() {
        return new Promise( (resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                'utf-8',
                (err, content) => {
                    if(err) { 
                        reject(err)
                    } else {
                        return resolve(JSON.parse(content))
                    }
                }
            )
        })
    }
}

module.exports = Product