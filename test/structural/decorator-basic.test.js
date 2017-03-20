  /* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let task = require('../../structural/decorator/decorator-basic')

describe('Structural - Decorator', () => {
  describe('Task', () => {
    it('should have priority property', () => {
      task.should.have.property('priority')
    })

    it('should have notify property', () => {
      task.should.have.property('notify')
    })

    it('should be true on notify', () => {
      task.notify().should.be.true
    })

    it('should return save with new properties', () => {
      task.save().should.be.eql({
        database: 'DB_1',
        name: 'Task!',
        status: 'OK',
        priority: 2
      })
    })
  })
})
