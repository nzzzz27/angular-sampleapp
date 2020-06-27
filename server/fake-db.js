const Product = require("./model/product");

class FakeDb {
    
    constructor() {
        this.products = [
            {
              name: 'Phone XL',
              price: 799,
              description: 'A large phone with one of the best screens',
              image: 'https://picsum.photos/200/150',
            },
            {
              name: 'Phone Mini',
              price: 699,
              description: 'A great phone with one of the best cameras',
              image: 'https://picsum.photos/200/150',
            },
            {
              name: 'Phone Standard',
              price: 299,
              description: '',
              image: 'https://picsum.photos/200/150',
            },
          ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }
 
    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save();
            }
        )
    }

    seeDb() {
        this.pushProductsToDb();
    }
}

module.exports = FakeDb