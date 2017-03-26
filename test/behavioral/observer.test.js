  /* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
const sinon = require('sinon')  // eslint-disable-line no-unused-vars
let ObservableTask = require('../../behavioral/observer/main')
let AuditingService = require('../../behavioral/observer/AuditingService')

describe('Behavioral - Observer', () => {
  let task
  let audits

  before(() => {
    task = new ObservableTask({name: 'T', user: 'F'})
    audits = new AuditingService()
  })

  describe('task', () => {
    let spyUpdate
    before(() => {
      spyUpdate = sinon.spy(audits, 'update')
    })

    it('should call update', () => {
      task.addObserver(audits.update)
      task.save(spyUpdate)
      spyUpdate.calledOnce.should.be.true
    })

    it('should return Auditing task T', () => {
      task.save(spyUpdate)
      spyUpdate.returnValues[0].should.be.eql('Auditing task T')
    })

    it('should not call update after remove observer', () => {
      spyUpdate.restore()
      spyUpdate = sinon.spy(audits, 'update')
      task.addObserver(audits.update)
      task.removeObserver(audits.update)
      task.save(spyUpdate)

      spyUpdate.notCalled.should.be.true
    })
  })
})
