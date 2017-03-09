'use strict'

/**
* EcmaScript2015
*/

class Task {
  constructor (name) {
    this.name = name
    this.completed = false
  }

  complete () {
    this.completed = true
    return this.completed
  }

  save () {
    return true
  }
}

module.exports = Task
