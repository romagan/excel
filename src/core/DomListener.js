import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }

    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const callbackName = _getListenerName(listener)

      if (!this[callbackName]) {
        throw new Error(`Method ${callbackName} isn't implemented in ${this.name} component`)
      }

      this[callbackName] = this[callbackName].bind(this)
      this.$root.on(listener, this[callbackName])
    })
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const callbackName = _getListenerName(listener)

      if (!this[callbackName]) {
        throw new Error(`Method ${callbackName} isn't implemented in ${this.name} component`)
      }
      this.$root.off(listener, this[callbackName])
    })
  }
}

function _getListenerName(eventName) {
  return `on` + capitalize(eventName)
}
