'use strict'

/**
* Factory Pattern:
* Simplifies Object creation
* Create object for us
* Creating objects based on NEED
* - used by gulp-load-plugins
*/
let Task = require('../prototype')
let repoFactory = require('./repoFactory')

// Not retrieve from cache
let task1 = new Task(repoFactory.task.get(1))
task1.save()

// Retrieve from cache using repoFactory, because
// task1 already call the module
let task = new Task(repoFactory.task.get(1))
let user = repoFactory.user.get(1)
let project = repoFactory.project.get(1)

task.user = user
task.project = project

task.save()

module.exports = task
