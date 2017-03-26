'use strict'

/**
* Mediator
* - Controls communication between objects
* - One object manages all communication
* - Many to Many relationships
*/

let mediator = (function () {
  let channels = {}

  let subscribe = function (channel, context, func) {
    if (!mediator.channels[channel]) {
      mediator.channels[channel] = []
    }

    mediator.channels[channel].push({
      context: context,
      func: func
    })
  }

  let publish = function (channel) {
    if (!this.channels[channel]) {
      return false
    }

    let args = Array.prototype.slice.call(arguments, 1)

    for (let i = 0; i < mediator.channels[channel].length; i++) {
      let sub = mediator.channels[channel][i]
      sub.func.apply(sub.context, args)
    }
  }

  return {
    channels: channels,
    subscribe: subscribe,
    publish: publish
  }
}())

module.exports = mediator
