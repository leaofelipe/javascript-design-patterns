'use strict'

let Repo = require('./module')

/**
* Using prototype, the class method will not
* create a new function for every instance.
* It will just link every class instance method
* to the linked prototype function. This is much more efficient.
*/

let Task = function (data) {
  this.name = data.name
  this.completed = false
}

Task.prototype.complete = function () {
  this.completed = true
  return this.completed
}

Task.prototype.save = function () {
  let result = Repo.save(this)
  return result
}

module.exports = Task
