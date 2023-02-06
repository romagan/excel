class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if (typeof html === `string`) {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  on(eventName, callback) {
    this.$el.addEventListener(eventName, callback)
  }

  off(eventName, callback) {
    this.$el.removeEventListener(eventName, callback)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

    return this
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  get data() {
    return this.$el.dataset
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  css(styles = {}) {
    if (!styles) return this

    Object.keys(styles).forEach((styleName) => {
      this.$el.style[styleName] = styles[styleName]
    })

    return this
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, className) => {
  const $el = document.createElement(tagName)

  if (className) {
    $el.classList.add(className)
  }

  return $($el)
}
