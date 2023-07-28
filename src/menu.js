import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector, modules) {
    super(selector)
    this.modules = modules.reduce((acc, Module) => {
      acc[Module.dataType] = new Module()
      return acc
    }, {}) || {}
    this.bodyEl = document.querySelector('body')
  }

  init() {
    this.add()
    this.bodyEl.addEventListener('contextmenu', (event) => {
      event.preventDefault()
      if (Object.keys(this.modules).length !== 0) {
        this.open(event)
      }
    })


    this.el.addEventListener('click', this.onClickModule.bind(this))
  }

  onClickModule(event) {
    const {type} = event.target.dataset
    if (type) {
      this.modules[type].trigger()
      this.close()
    }
  }

  open(event) {
    const {y: top, x: left} = event
    this.el.style.top = top + 'px'
    this.el.style.left = left + 'px'

    this.el.classList.add('open')
  }

  add() {
    Object.values(this.modules).forEach(module => {
      this.el.insertAdjacentHTML('beforeend', module.toHTML())
    })
  }

  close() {
    this.el.classList.remove('open')
  }
}