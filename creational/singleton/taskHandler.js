'use strict'

let repo = require('./Repo')
let myrepo = repo()

let taskHandler = () => {
  return {
    save: () => {
      myrepo.save('me')
    }
  }
}

module.exports = taskHandler()
