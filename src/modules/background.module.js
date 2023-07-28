import {Module} from '../core/module'
import {generateRandomColor} from "@/utils";

export class BackgroundModule extends Module {
  static dataType = 'backgroundModule'
  constructor() {
    super(BackgroundModule.dataType, 'Поменять цвет')
    this.bodyEl = document.querySelector('body')
  }

  trigger() {
    this.bodyEl.style.background = generateRandomColor()
  }
}