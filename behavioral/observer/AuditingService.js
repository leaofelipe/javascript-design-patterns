'use strict'

function AuditingService () {
  let message = 'Auditing'
  this.update = function (task) {
    return message + ' task ' + task.name
  }
}

module.exports = AuditingService
