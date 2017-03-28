'use strict'

let repo = require('./Repo')
let myrepo = repo()

let taskHandler = function () {
  return {
    save: () => {
      return myrepo.save('me')
    }
  }
}

module.exports = taskHandler()
