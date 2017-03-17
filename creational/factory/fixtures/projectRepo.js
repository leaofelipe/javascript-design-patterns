'use strict'

/* FACTORY EXAMPLES FIXTURE */
let projectRepo = function () {
  let get = function (id) {
    return {name: 'project #1'}
  }

  return {
    get: get
  }
}

module.exports = projectRepo()
