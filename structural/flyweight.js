'use strict'

/**
* Flyweight Pattern
* - Conserve memory by sharing portions of an object
*   between objects
* - Share data across objects
* - ONLY USEFUL WHEN WE HAVE LARGE NUMBER OF OBJECTS
*/

let projects = ['none', 'p1', 'p2', 'p3']
let priorities = [1, 2, 3, 4, 5]
let users = ['Felipe', 'James', 'Kate', 'Nathan']
let completed = [true, false]

let Task1 = function (data) {
  this.name = data.name
  this.priority = data.priority
  this.project = data.project
  this.user = data.user
  this.completed = data.completed
}

let Task2 = function (data) {
  this.name = data.name // The only unique!!!
  this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed)
}

// FLYWEIGHT
function Flyweight (project, priority, user, completed) {
  this.priority = priority
  this.project = project
  this.user = user
  this.completed = completed
}

let FlyweightFactory = (function () {
  let flyweights = {}

  // If key not exists, we create a new one
  let get = function (project, priority, user, completed) {
    if (!flyweights[project + priority + user + completed]) {
      flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed)
    }
    return flyweights[project + priority + user + completed]
  }

  return {
    get: get
  }
}())

function TaskCollection (T) {
  let tasks = {}
  let count = 0

  let add = function (data) {
    tasks[data.name] = new T(data)
    count++
  }

  let get = function (name) {
    return tasks[name]
  }

  let getCount = function () {
    return count
  }

  return {
    add: add,
    get: get,
    getCount: getCount
  }
}

let tasks1 = new TaskCollection(Task1)
let tasks2 = new TaskCollection(Task2)

function testCreation (col) {
  let initialMemory = process.memoryUsage().heapUsed

  for (let i = 0; i < 1000000; i++) {
    col.add({
      name: `task${i}`,
      priority: priorities[Math.floor((Math.random() * 5))],
      project: projects[Math.floor((Math.random() * 4))],
      user: users[Math.floor((Math.random() * 4))],
      completed: completed[Math.floor((Math.random() * 2))]
    })
  }

  let afterMemory = process.memoryUsage().heapUsed
  let memUsage = ((afterMemory - initialMemory) / 10000000)

  return {
    memUsage: memUsage,
    taskCount: col.getCount()
  }
}

module.exports = {
  tasks1: tasks1,
  tasks2: tasks2,
  testCreation: testCreation
}
