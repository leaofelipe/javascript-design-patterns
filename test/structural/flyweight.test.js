  /* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let flyweight = require('../../structural/flyweight')

describe.skip('Structural - Flyweight', () => {
  let r1
  let r2
  before(function () {
    this.timeout(50000)
    r1 = flyweight.testCreation(flyweight.tasks1)
    r2 = flyweight.testCreation(flyweight.tasks2)
  })

  it('r1 should be same taskCount than r2', () => {
    r1.taskCount.should.be.eql(r2.taskCount)
  })

  it('r1 should be above r2', () => {
    r1.memUsage.should.be.above(r2.memUsage)
  })
})
