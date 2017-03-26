'use strict'

/**
* Command
* - Encapsulates calling of a method as an object
* - Decouples the execution from the implementation
* - Less fragile implementation
* - UNDO operations, saving state
*
* Have used in DATABASES to rollback transitions if
* anything get wrong
*/

let repo = {
  tasks: {},
  commands: [],
  get: function (id) {
    return {name: 'Task #1'}
  },
  save: function (task) {
    repo.tasks[task.id] = task
    return {name: task.name, status: 'OK'}
  },
  // ROLLBACK!
  replay: function () {
    for (let i = 0; i < repo.commands.length; i++) {
      let command = repo.commands[i]
      repo.executeNonLog(command.name, command.obj)
    }
  }
}

repo.executeNonLog = function (name) {
  let args = Array.prototype.slice.call(arguments, 1)

  if (repo[name]) {
    return repo[name].apply(repo, args)
  }
  return false
}

repo.execute = function (name) {
  let args = Array.prototype.slice.call(arguments, 1)

  repo.commands.push({
    name: name,
    obj: args[0]
  })

  if (repo[name]) {
    return repo[name].apply(repo, args)
  }
  return false
}

module.exports = repo
