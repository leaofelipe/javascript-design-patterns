  /* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let Repo = require('../creational/module')
let Task = require('../creational/prototype')

describe('Creational - Module', () => {
  it('should get a task by ID', () => {
    Repo.get(1).should.be.eql({name: 'Task #1'})
  })

  it('should save', () => {
    let taskLiteral = {name: 'Task #3'}
    Repo.save(taskLiteral).should.be.eql({
      name: 'Task #3',
      status: 'OK',
      database: 'DB_1'
    })
  })

  it('should save a task using repo', () => {
    let task = new Task({name: 'Task #2'})
    task.save().should.be.eql({
      name: 'Task #2',
      status: 'OK',
      database: 'DB_1'
    })
  })
})
