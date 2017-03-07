'use strict'

const mod = require('../concepts/defineproperty')
const should = require('chai').should()  // eslint-disable-line no-unused-vars

describe('Define property', () => {
  describe('user', () => {
    let str = 'id: 1, name: Felipe'

    it('user id should be 1', () => {
      mod.user.id.should.be.equal(1)
    })

    it('user name should be Felipe', () => {
      mod.user.name.should.be.equal('Felipe')
    })

    it('should be an equal string', () => {
      mod.user.getAll().should.be.equal(str)
    })

    it('should throw error of assign', () => {
      function test () {
        mod.user.getAll = 1
      }

      test.should.throw(/Cannot assign to read only/)
    })
  })
})
