'use strict'

/**
* Structural Decorator
* I don't want to create properties for every
* new Urgent Task!
*/

let Task = require('../../creational/prototype')

/* let UrgentTask = Object.create(Task.prototype) */
function UrgentTask (data) {
  Task.call(this, data)
  this.priority = data.priority
}

/* IF I DO THIS, EVERY CHANGE I DO IN
* UrgentTask.prototype, will just link with Task and
* affects Task.prototype object!
* ->>> UrgentTask.prototype = Task.prototype
* Use this instead to create a NEW OBJECT from Task:
*/
UrgentTask.prototype = Object.create(Task.prototype)
UrgentTask.prototype.notify = function () {
  return true
}
UrgentTask.prototype.save = function () {
  this.notify()
  let saved = Task.prototype.save.call(this)
  saved.priority = 2
  return saved
}

let urgentTask = new UrgentTask({name: 'Task!', priority: 2})
/* urgentTask.priority = 2 */
/* urgentTask.notify = function () { */
/*   return true */
/* } */

/* // If not use Task.prorotype, save will */
/* // enter infinity loop */
/* urgentTask.save = function () { */
/*   this.notify() */
/*   let saved = Task.prototype.save.call(this) */
/*   saved.priority = 2 */
/*   return saved */
/* } */

module.exports = urgentTask
