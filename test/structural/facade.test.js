  /* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let facade = require('../../structural/facade')

describe('Structural - Facade', () => {
  let task
  before(() => {
    task = new facade.Task({name: 'Task!'})
  })

  it('should return true', () => {
    facade.TaskServiceWrapper(task).should.be.true
  })
})
