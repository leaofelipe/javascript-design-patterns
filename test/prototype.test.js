  /* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let Task = require('../creational/prototype')

describe('Creational Pattern - Prototype', () => {
  let task1
  before(() => {
    task1 = new Task({name: 'Task #1'})
  })

  it('should create a new task', () => {
    task1.should.be.an.instanceOf(Task)
  })

  it('name should be equal', () => {
    task1.name.should.be.equal('Task #1')
  })

  it('completed should be false', () => {
    task1.completed.should.be.false
  })

  it('completed should be true', () => {
    task1.complete().should.be.true
  })

  it('save should be true', () => {
    task1.save().should.be.eql({
      name: 'Task #1',
      status: 'OK',
      database: 'DB_1'
    })
  })
})
