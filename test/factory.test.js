  /* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let Task = require('../creational/prototype')
let task = require('../creational/factory/factory')

describe('Creational - Factory', () => {
  it('task should be instance of Task', () => {
    task.should.be.instanceof(Task)
  })

  it.skip('task should have properties', () => {
    task.should.have.property('user')
    task.should.have.property('project')
  })

  it.skip('task save should return true', () => {
    task.save().should.be.true
  })
})
