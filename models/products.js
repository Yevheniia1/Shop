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

    static async update(productAfterEdit) {
        const products = await Product.getAll();
        const index = products.findIndex( (p) => p.id === productAfterEdit.id);
        products[index] = productAfterEdit;

        return new Promise( (resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                JSON.stringify(products),
                (err) => {
                    if(err) reject(err)
                    else resolve()
                }
            )
        })
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
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }

    static async getById(id) {
        const products = await Product.getAll();
        return products.find(prod => prod.id === id)
    }
}

module.exports = Product