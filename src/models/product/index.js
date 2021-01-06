const productMock = require('./__MOCK__')
const _ = require('lodash')

class Product {
  /**
   * 
   * @param {Array<String>} selector 
   */
  static getAll (selector) {
    if (selector) {
      return productMock.map(p => _.pick(p, selector));
    }
    return productMock
  }
}

module.exports = Product