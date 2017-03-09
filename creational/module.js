'use strict'

/**
* Module Pattern:
* Can be a Object Literal or Wrap into a function.
* The base difference between MODULE and CONSTRUCTOR patterns
* is when use MODULE, we have only ONE (Eg. A Service) while CONSTRUCTOR
* we have SOME (Eg. User, Task)
*/

// Responsible for All repository Calls
let repo = function () {
  // Module private variable
  let db = {
    name: 'DB_1'
  }

  // REVEALING MODULE PATTERN
  // Now i can see the methods of this module
  let get = function (id) {
    return {name: 'Task #1'}
  }

  return {
    get: get, // use Revealing module pattern
    save: function (task) {
      return {name: task.name, status: 'OK', database: db.name}
    }
  }
}

// There is no problem to execute this function,
// since the return will be methods and we have no Constructors.
module.exports = repo()
