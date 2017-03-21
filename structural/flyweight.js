'use strict'

/**
* Flyweight Pattern
* - Conserve memory by sharing portions of an object
*   between objects
* - Share data across objects
* - ONLY USEFUL WHEN WE HAVE LARGE NUMBER OF OBJECTS
*/

let Task = function (data) {
  this.name = data.name
  this.priority = data.priority
  this.project = data.project
  this.user = data.user
  this.completed = data.completed
}

function TaskCollection () {
  let tasks = {}
  let count = 0

  let add = function (data) {
    tasks[data.name] = new Task(data)
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

let tasks = new TaskCollection()

let projects = ['none', 'p1', 'p2', 'p3']
let priorities = [1, 2, 3, 4, 5]
let users = ['Felipe', 'James', 'Kate', 'Nathan']
let completed = [true, false]

function testCreation (t) {
  let initialMemory = process.memoryUsage().heapUsed

  for (let i = 0; i < 100000; i++) {
    t.add({
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
    taskCount: tasks.getCount()
  }
}

console.log(testCreation(tasks))
