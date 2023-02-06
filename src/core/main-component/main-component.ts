import {DomListener, IDomListenerOptionsType} from '@core/dom-listener/dom-listener.component'
import {Dom} from '@core/dom'

type MainComponentType = typeof MainComponent
export interface IMainComponentType extends MainComponentType {}



export abstract class MainComponent extends DomListener {
  public static className: string

  constructor($root: Dom, options: IDomListenerOptionsType) {
    super($root, options)
  }

  public init() {
    this.initDOMListeners()
  }

  abstract toHTML(): string
}
