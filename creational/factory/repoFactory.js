'use strict'

let RepoFactory = function () {
  this.getRepo = function (repoType) {
    if (repoType === 'task') {
      let taskRepo = require('../module')
      return taskRepo
    }

    if (repoType === 'task') {
      let userRepo = require('../userRepo')
      return userRepo
    }

    if (repoType === 'task') {
      let userRepo = require('../userRepo')
      return userRepo
    }
  }
}

module.exports = new RepoFactory()
