import {MainComponent} from '@core/main-component/main-component'
import {Dom} from '@core/dom'

export class Formula extends MainComponent {
  static className = `excel__formula`

  constructor($root: Dom) {
    super($root, {
      name: 'formula',
      listeners: [`input`]
    })
  }

  public toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  public onInput() {}
}
