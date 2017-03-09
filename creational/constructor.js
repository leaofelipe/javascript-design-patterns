'use strict'

/**
* The problem here is that every new instance
* of this class will create new functions with every
* method. To solve this efficiency problem,
* use Prototype pattern.
*/

let Task = function (name) {
  this.name = name
  this.completed = false

  this.complete = function () {
    this.completed = true
    return this.completed
  }

  this.save = function () {
    return true
  }
}

module.exports = Task
