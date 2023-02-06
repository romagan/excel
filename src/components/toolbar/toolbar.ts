import {MainComponent} from '@core/main-component/main-component'
import {Dom} from '@core/dom'

export class Toolbar extends MainComponent {
  static className = `excel__toolbar`

  constructor($root: Dom) {
    super($root, {
      name: 'toolbar',
      listeners: []
    })
  }

  public toHTML(): string {
    return `
      <div class="button">
        <i class="material-icons">format_align_left</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_center</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_right</i>
      </div>

      <div class="button">
        <i class="material-icons">format_bold</i>
      </div>

      <div class="button">
        <i class="material-icons">format_italic</i>
      </div>

      <div class="button">
        <i class="material-icons">format_underlined</i>
      </div>
    `
  }
}
