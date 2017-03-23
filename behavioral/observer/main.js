'use strict'

let Task = require('./Task')

/* let NotificationService = function () { */
/*   let message = 'Notifying' */
/*   this.update = function (task) { */
/*     return message */
/*   } */
/* } */

/* let LoggingService = function () { */
/*   let message = 'Logging' */
/*   this.update = function (task) { */
/*     return message */
/*   } */
/* } */

let AuditingService = function () {
  let message = 'Auditing'
  this.update = function (task) {
    return message + ' task ' + task.name
  }
}

function ObserverList () {
  this.observerList = []
}

ObserverList.prototype.add = function (obj) {
  this.observerList.push(obj)
}

ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index]
  }
}

ObserverList.prototype.count = function () {
  return this.observerList.length
}

ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1)
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
  let i

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i
    }
    i++
  }

  return -1
}

let ObservableTask = function (data) {
  Task.call(this, data)
  this.observers = new ObserverList()
}

ObservableTask.prototype.addObserver = function (observer) {
  this.observers.add(observer)
}

ObservableTask.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0))
}

ObservableTask.prototype.notify = function (context) {
  let observersCount = this.observers.count()
  for (let i = 0; i < observersCount; i++) {
    this.observers.get(i)(context)
  }
}

ObservableTask.prototype.save = function () {
  Task.prototype.save.call(this)
  this.notify(this)
}

/* let task1 = new ObservableTask({name: 'Task #1', user: 'Felipe'}) */

/* let nots = new NotificationService() */
/* let logs = new LoggingService() */
/* let audits = new AuditingService() */

/* task1.addObserver(nots.update) */
/* task1.addObserver(logs.update) */
/* task1.addObserver(audits.update) */

module.exports = {
  ObservableTask: ObservableTask,
  AuditingService: AuditingService
}
