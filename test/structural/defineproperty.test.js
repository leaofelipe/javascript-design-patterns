'use strict'

const mod = require('../../concepts/defineproperty')
const should = require('chai').should()  // eslint-disable-line no-unused-vars
const _ = require('underscore')
const user = mod.user

describe('Concepts - Define property', () => {
  let str = 'id: 1, name: Felipe'

  it('id should be 1', () => {
    user.id.should.be.equal(1)
  })

  it('name should be Felipe', () => {
    user.name.should.be.equal('Felipe')
  })

  it('name should be João', () => {
    let user = _.clone(mod.user)
    user.name = 'João'
    user.name.should.be.equal('João')
  })

  it('should be an equal string', () => {
    user.getAll().should.be.equal(str)
  })

  it('should throw error of assign', () => {
    function test () {
      user.getAll = 1
    }

    test.should.throw(/Cannot assign to read only/)
  })
})
