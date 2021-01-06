const productMock = require('./__MOCK__')
const _ = require('lodash')

class Product {
  /**
   * 
   * @param {Array<String>=} selector 
   */
  static getAll (selector) {
    return new Promise((res, rej) => {
      if (selector) {
        res(productMock.map(p => _.pick(p, selector)))
        return
      }
      res(productMock)
    })
  }

  /**
   * 
   * @param {String} id 
   */
  static getOneById (id) {
    return new Promise((res, rej) => {
      const product = productMock.find(p => p.id === id)

      product ? res(product) : rej(new Error('Not found'))
    })
  }
}

module.exports = Product