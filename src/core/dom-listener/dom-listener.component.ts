import {Dom} from '@core/dom'

export type IDomListenerOptionsType = {
  listeners: string[],
  name: string
}

export class DomListener {
  private $root: Dom
  private options: IDomListenerOptionsType

  constructor($root: Dom, options: IDomListenerOptionsType) {
    if (!$root) {
      throw new Error(`No root provided for ${name}`)
    }

    this.$root = $root
    this.options = options

    if (!this.options.listeners) this.options.listeners = []
  }

  initDOMListeners() {
    console.log(this.$root)
    console.log(this.options.listeners)

    this.options.listeners.forEach((listener) => {

    })
  }

  removeDOMListeners() {}
}
