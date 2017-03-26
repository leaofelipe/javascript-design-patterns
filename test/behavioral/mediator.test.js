/* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
const sinon = require('sinon')  // eslint-disable-line no-unused-vars
let Task = require('../../behavioral/fixtures/Task')
let AuditingService = require('../../behavioral/fixtures/AuditingService')
let mediator = require('../../behavioral/mediator.js')

describe.only('Behavioral - Mediator', () => {
  let task
  let audit

  before(() => {
    task = new Task({name: 'T', user: 'F'})
    audit = new AuditingService()
  })

  describe('task', () => {
    it('should be instance of task', () => {
      task.should.be.instanceOf(Task)
    })
  })

  describe('audit', () => {
    it('should be instance of AuditingService', () => {
      audit.should.be.instanceOf(AuditingService)
    })
  })

  describe('mediator', () => {
    let spyUpdate

    before(() => {
      spyUpdate = sinon.spy(audit, 'update')

      mediator.subscribe('complete', audit, audit.update)
      task.complete = function () {
        mediator.publish('complete', this)
        return Task.prototype.complete.call(this)
      }
    })

    it('should call audit update', () => {
      task.complete(spyUpdate)
      spyUpdate.calledOnce.should.be.true
    })

    it('should return value', () => {
      task.complete(spyUpdate)
      spyUpdate.returnValues[0].should.be.eql('Auditing task T')
    })
  })
})
