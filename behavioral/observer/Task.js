'use strict'

let Task = function (data) {
  this.name = data.name
  this.priority = data.priority
  this.project = data.project
  this.user = data.user
  this.completed = data.completed
}

Task.prototype.complete = function () {
  this.completed = true
  return this.completed
}

Task.prototype.save = function () {
  return true
}

module.exports = Task
