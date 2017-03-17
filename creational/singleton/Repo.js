'use strict'

let repo = function () {
  let called = 0

  let save = function (task) {
    called++
    return {task: task, called: called, status: 'OK'}
  }

  return {
    save: save
  }
}

module.exports = repo
