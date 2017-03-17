'use strict'

/* FACTORY EXAMPLES FIXTURE */
let taskRepo = function () {
  let get = function (id) {
    return {name: 'Task #1'}
  }

  return {
    get: get,
    save: function (task) {
      return {name: task.name, status: 'OK'}
    }
  }
}

module.exports = taskRepo()
