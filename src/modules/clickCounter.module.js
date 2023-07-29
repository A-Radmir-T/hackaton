import {Module} from '../core/module'

export class ClickCounter extends Module {
    static dataType = 'ClickCounterModule'
    constructor() {
      super(ClickCounter.dataType, 'Посчитать скорость кликов')
      this.bodyEl = document.querySelector('body')
    }
  
    trigger() {
        const amountClics = document.createElement("p")
        let clickCount = 0
        amountClics.innerText = `Количество кликов: ${clickCount}`
        this.bodyEl.append(amountClics)
        this.body.addEventListener("click", () => {
            clickCount++;
            amountClics.innerText = `Количество кликов: ${clickCount}`;
        })
        setTimeout(() => {
            alert(`Время вышло! Вы кликнули ${clickCount} раз.`);
            amountClics.remove()
    }, 3000);
    }
}
