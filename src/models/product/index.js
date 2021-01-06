const productMock = require('./__MOCK__')
const _ = require('lodash')

class Product {
  /**
   * 
   * @param {Array<String>=} selector 
   */
  static getAll (selector) {
    return new Promise((res, rej) => {
      res(select(productMock, selector))
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

  /**
   * 
   * @param {Array<String>} ids 
   * @param {Array<String>=} selector 
   */
  static getById (ids, selector) {
    return new Promise((res, rej) => {
      const products = productMock.filter(p => ids.includes(p.id))

      res(select(products, selector))
    })
  }
}

function select (products, selector) {
  if (selector) {
    return (products.map(p => _.pick(p, selector)))
  }
  return (products)
}

module.exports = Product