'use strict'

let repo = require('./Repo')
let myrepo = repo()

let taskHandler = () => {
  return {
    save: () => {
      return myrepo.save('me')
    }
  }
}

module.exports = taskHandler()
