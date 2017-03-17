'use strict'

/**
* Factory Pattern:
* Simplifies Object creation
* Create object for us
* Creating objects based on NEED
* - used by gulp-load-plugins
*
* Best version of: no_factory.js
*/
let Task = require('./../prototype')
let repoFactory = require('./repoFactory')

let task = new Task(repoFactory.getRepo('task').get(1))
let user = repoFactory.getRepo('user').get(1)
let project = repoFactory.getRepo('project').get(1)

task.user = user
task.project = project

task.save()

module.exports = task
