import {MainComponent} from '@core/main-component/main-component'
import {Dom} from '@core/dom'

export class Header extends MainComponent {
  static className = `excel__header`

  constructor($root: Dom) {
    super($root, {
      name: 'header',
      listeners: []
    })
  }

  public toHTML(): string {
    return `
      <input type="text" class="input" value="Новая таблица" />

      <div>

        <div class="button">
          <i class="material-icons">delete</i>
        </div>

        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>

      </div>
    `
  }
}
