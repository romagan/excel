import {MainComponent, IMainComponentType} from '@core/main-component/main-component'
import {$, Dom} from '@core/dom'

type ExcelOptionsType = {
  components: MainComponentType[]
}

type MainComponentType = new (...args: any[]) => MainComponent

export class Excel {
  private components: MainComponentType[]
  private $el: Dom

  constructor(selector: string, {components}: ExcelOptionsType) {
    this.$el = $(selector)
    this.components = components
  }

  private getRoot(): Dom {
    const $root = $.create(`div`, `excel`)

    this.components.forEach((Comp) => {
      //@ts-ignore
      const $el = $.create(`div`, Comp.className)
      const comp = new Comp($el)
      comp.init()
      $el.html(comp.toHTML())

      $root.append($el)
    })

    return $root
  }

  public render() {
    this.$el.append(this.getRoot())

    // this.components.forEach((component) => {
    //   component.
    // })
  }
}
