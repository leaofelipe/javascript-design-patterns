'use strict'

// Compare between: using_factory.js
// >>>> NOT USING FACTORY <<<<<<
let Task = require('../prototype')
let taskRepo = require('./fixtures/taskRepo')
let userRepo = require('./fixtures/userRepo')
let projectRepo = require('./fixtures/projectRepo')

let task = new Task(taskRepo.get(1))
let user = userRepo.get(1)
let project = projectRepo.get(1)

task.user = user
task.project = project
task.save()

module.exports = task
