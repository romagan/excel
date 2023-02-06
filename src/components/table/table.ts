import {MainComponent} from '@core/main-component/main-component'
import {Dom} from '@core/dom'

export class Table extends MainComponent {
  static className = 'excel__table'

  constructor($root: Dom) {
    super($root, {
      name: 'table',
      listeners: []
    })
  }

  toHTML() {
    return ``
  }
}
