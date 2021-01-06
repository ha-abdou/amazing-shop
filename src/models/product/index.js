const productMock = require('./__MOCK__')
const _ = require('lodash')

class Product {
  /**
   * 
   * @param {Array<String>} selector 
   */
  static getAll (selector) {
    if (selector) {
      return_.pick(productMock, selector);
    }
    return productMock
  }
}

module.exports = Product