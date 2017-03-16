'use strict'

/**
* Factory Pattern:
* Simplifies Object creation
* Create object for us
* Creating objects based on NEED
*/

let Task = require('./prototype')
let Repo = require('./module')

let task1 = new Task(Repo.get(1))

module.exports = task1
