/* eslint-disable no-unused-expressions */

'use strict'

const should = require('chai').should()  // eslint-disable-line no-unused-vars
let repo = require('../../behavioral/command.js')

describe('Behavioral - Command', () => {
  describe('Repo', () => {
    before(() => {
      repo.execute('save', {
        id: 1,
        name: 'Task 1',
        completed: false
      })
      repo.execute('save', {
        id: 2,
        name: 'Task 2',
        completed: false
      })
    })

    it('should have tasks', () => {
      repo.tasks.should.be.eql({
        '1': { id: 1, name: 'Task 1', completed: false },
        '2': { id: 2, name: 'Task 2', completed: false }
      })
    })

    it('should have no tasks', () => {
      repo.tasks = {}
      repo.tasks.should.be.eql({})
    })

    // MAGIC
    it('should have tasks', () => {
      repo.replay()
      repo.tasks.should.be.eql({
        '1': { id: 1, name: 'Task 1', completed: false },
        '2': { id: 2, name: 'Task 2', completed: false }
      })
    })
  })
})
