'use strict'

let user = {
  id: 1,
  name: 'Felipe'
}

Object.defineProperty(user, 'getAll', {
  value: function () {
    return (`id: ${this.id}, name: ${this.name}`)
  },
  writable: false
})

module.exports.user = user
