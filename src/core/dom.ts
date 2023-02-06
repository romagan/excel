export class Dom {
  private $el: HTMLElement

  constructor(selector: string | HTMLElement) {
    if (typeof selector === `string`) {
      this.$el = document.querySelector(selector) as HTMLElement

      if (!this.$el) {
        throw new Error(`There is no element with selector ${selector}`)
      }
    } else {
      this.$el = selector
    }
  }

  html(html?: string): this | string {
    if (html) {
      this.$el.innerHTML = html
      return this
    }

    return this.$el.outerHTML
  }

  clear(): this {
    this.html(``)
    return this
  }

  append(node: HTMLElement | Dom): this {
    if (node instanceof Dom) {
      node = node.$el
    }

    this.$el.append(node)

    return this
  }

  on(eventName: string, callback: () => unknown): this {
    this.$el.addEventListener(eventName, callback)

    return this
  }

  off(eventName: string, callback: () => unknown): this {
    this.$el.addEventListener(eventName, callback)

    return this
  }
}

export const  $ = (selector: string | HTMLElement) => {
  return new Dom(selector)
}

$.create = (tagName: string, className: string) => {
  const $el = document.createElement(tagName);

  if (className) {
    $el.classList.add(className);
  }

  return $($el)
}
