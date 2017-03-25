'use strict'

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

module.exports = ObserverList
