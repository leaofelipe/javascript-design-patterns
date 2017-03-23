  /* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let Task = require('../../../behavioral/observer/Task')

describe('Behavioral - Observer', () => {
  let task
  before(() => {
    task = new Task({
      name: 'Task #1',
      priority: 1,
      project: 'My Project',
      user: 'Felipe',
      completed: false
    })
  })
  describe('task', () => {
    it('should be an object', () => {
      task.should.be.an.instanceOf(Task)
    })

    it('should have properties', () => {
      task.should.have.property('name')
      task.should.have.property('priority')
      task.should.have.property('project')
      task.should.have.property('user')
      task.should.have.property('completed')
    })

    it('should have completed false', () => {
      task.completed.should.be.false
    })

    it('should have completed true', () => {
      task.complete().should.be.true
    })

    it('should save true', () => {
      task.save().should.be.true
    })
  })
  /* before(() => { */
  /*   task1 = new Task({name: 'Task #1'}) */
  /* }) */

  /* it('should create a new task', () => { */
  /*   task1.should.be.an.instanceOf(Task) */
  /* }) */

  /* it('name should be equal', () => { */
  /*   task1.name.should.be.equal('Task #1') */
  /* }) */

  /* it('completed should be false', () => { */
  /*   task1.completed.should.be.false */
  /* }) */

  /* it('completed should be true', () => { */
  /*   task1.complete().should.be.true */
  /* }) */

  /* it('save should be true', () => { */
  /*   task1.save().should.be.eql({ */
  /*     name: 'Task #1', */
  /*     status: 'OK', */
  /*     database: 'DB_1' */
  /*   }) */
  /* }) */
})
