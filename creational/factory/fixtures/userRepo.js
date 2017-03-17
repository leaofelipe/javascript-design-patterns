'use strict'

/* FACTORY EXAMPLES FIXTURE */
let userRepo = function () {
  let get = function (id) {
    return {name: 'User #1'}
  }

  return {
    get: get
  }
}

module.exports = userRepo()
