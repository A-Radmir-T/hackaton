import {Module} from '../core/module'
import {generateRandomColor, random} from "@/utils";

export class ShapeModule extends Module {
  static dataType = 'shapeModule'

  constructor() {
    super(ShapeModule.dataType, 'Создать фигуру')
    this.bodyEl = document.querySelector('body')
    this.shapeEl = document.createElement('div');
    this.shapeEl.className = 'random-shape'
    this.shapeStyles = {}
    this.bodyEl.append(this.shapeEl)
  }

  trigger() {
    this.shapeEl.remove()
    const windowWidth = window.innerWidth - 100
    const windowHeight = window.innerHeight - 100
    this.shapeStyles.top = random(0, +windowHeight) + 'px'
    this.shapeStyles.left = random(0, +windowWidth) + 'px'
    this.shapeStyles.width = random(40, 100) + 'px'
    this.shapeStyles.height = random(40, 100) + 'px'
    this.shapeStyles.borderRadius = random(5, 50) + '%'
    this.shapeStyles.backgroundColor = generateRandomColor()

    Object.keys(this.shapeStyles).forEach(key => {
      this.shapeEl.style[key] = this.shapeStyles[key]
    })

    this.bodyEl.append(this.shapeEl)
  }
}
