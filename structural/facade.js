'use strict'

/**
* Difference between Facade and Decorator is
* Facade not ADD new functionalities
*/

function Task (data) {
  this.name = data.name
  this.completed = false
  this.status = 'unsaved'
}

let TaskService = (function () {
  function complete (task) {
    task.completed = true
  }

  function save (task) {
    task.status = 'saved'
  }

  return {
    complete: complete,
    save: save
  }
}())

let TaskServiceWrapper = (function () {
  function completeAndSave (task) {
    TaskService.complete(task)
    TaskService.save(task)
    if (task.completed === true && task.status === 'saved') {
      return true
    } else {
      return false
    }
  }

  return {
    completeAndSave: completeAndSave
  }
}())

module.exports.TaskServiceWrapper = TaskServiceWrapper.completeAndSave
module.exports.Task = Task
