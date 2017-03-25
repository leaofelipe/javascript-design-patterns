'use strict'

let Task = require('./Task')
let ObserverList = require('./ObserverList')

// Observable task Inherit Task for observers include
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

module.exports = ObservableTask
