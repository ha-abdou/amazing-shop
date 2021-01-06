const productMock = require('./__MOCK__')

class Product {
  static getAll () {
    return productMock
  }
}

module.exports = Product