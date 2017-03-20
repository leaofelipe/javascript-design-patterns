'use strict'

/**
* Structural Decorator
* - Add functionality on existing object
* - More complete inheritance
* - Wrap an Object
* - Protect existing object
*/

let Task = require('../creational/prototype')

let urgentTask = new Task({name: 'Task!'})
urgentTask.priority = 2
urgentTask.notify = function () {
  return true
}

// If not use Task.prorotype, save will
// enter infinity loop
urgentTask.save = function () {
  this.notify()
  let saved = Task.prototype.save.call(this)
  saved.priority = 2
  return saved
}

module.exports = urgentTask
