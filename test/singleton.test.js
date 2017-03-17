/* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let myrepo = require('../creational/singleton/singleton')
let taskHandler = require('../creational/singleton/taskHandler')

describe('Creational - Factory', () => {
  describe('not using factory', () => {
    it('should return object when sae', () => {
      myrepo.save('Hi').should.be.true
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
})
