/* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let taskHandler = require('../creational/singleton/taskHandler')

describe('Creational - Singleton', () => {
  let response
  before(() => {
    response = taskHandler.save('hi')
  })

  it('should return object when save', () => {
    response.should.be.an('Object')
  })

  it('should have properties', () => {
    response.should.have.property('task')
    response.should.have.property('called')
    response.should.have.property('status')
  })

  it('called should be 1', () => {
    response.called.should.be.eql(1)
  })

  it('called should be 2', () => {
    let r = taskHandler.save('hi')
    r.called.should.be.eql(2)
  })
})
