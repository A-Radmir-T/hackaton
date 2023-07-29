import {Module} from '../core/module'
import {generateRandomColor, random} from "@/utils";

export class ShapeModule extends Module {
  static dataType = 'shapeModule'

  constructor() {
    super(ShapeModule.dataType, 'Создать фигуру')
    this.bodyEl = document.querySelector('body')
    this.shapeEl = document.createElement('div');
    this.shapeEl.className = 'random-shape'
    this.sapeStyles = {}
    this.bodyEl.append(this.shapeEl)
  }

  trigger() {
    this.shapeEl.remove()
    document.onclick = () => {
      const windowWidth = window.innerWidth - 100
      const windowHeight = window.innerHeight - 100
      this.sapeStyles.top = random(0, +windowHeight) + 'px'
      this.sapeStyles.left = random(0, +windowWidth) + 'px'
      console.log(this.sapeStyles.top)
      this.sapeStyles.width = random(40, 100) + 'px'
      this.sapeStyles.height = random(40, 100) + 'px'
      this.sapeStyles.borderRadius = random(5, 50) + '%'
      this.sapeStyles.backgroundColor = generateRandomColor()

      Object.keys(this.sapeStyles).forEach(key => {
        this.shapeEl.style[key] = this.sapeStyles[key]
      })

      this.bodyEl.append(this.shapeEl)
      document.onclick = null

    }

  }
}