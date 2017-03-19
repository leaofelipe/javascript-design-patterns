  /* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let Task = require('../../creational/prototype')
let task1 = require('../../creational/factory/no_factory')
let task2 = require('../../creational/factory/factory')

describe('Creational - Factory', () => {
  describe('not using factory', () => {
    it('task should be instance of Task', () => {
      task1.should.be.instanceof(Task)
    })

    it('task should have properties', () => {
      task1.should.have.property('user')
      task1.should.have.property('project')
    })

    it('task save should return true', () => {
      task1.save().should.be.eql({
        name: 'Task #1',
        status: 'OK',
        database: 'DB_1'
      })
    })
  })

  describe('using factory', () => {
    it('task should be instance of Task', () => {
      task2.should.be.instanceof(Task)
    })

    it('task should have properties', () => {
      task2.should.have.property('user')
      task2.should.have.property('project')
    })

    it('task save should return true', () => {
      task2.save().should.be.eql({
        name: 'Task #1',
        status: 'OK',
        database: 'DB_1'
      })
    })
  })
})
