'use strict'

/**
* Singleton:
* One instance of the object across
* the application
* - Remembers the last time you used it
* - Hands the sames instance back
*/

let taskHandler = require('./taskHandler')
let repo = require('./Repo')
let myrepo = repo()

myrepo.save('Hi')
myrepo.save('Hi')
myrepo.save('Hi')
console.log(taskHandler.save())
taskHandler.save()
taskHandler.save()
console.log(taskHandler.save())

module.exports = myrepo
