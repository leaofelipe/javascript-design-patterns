'use strict'

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
