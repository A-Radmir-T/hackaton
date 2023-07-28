import {Module} from '../core/module'

export class ClickCounter extends Module {
    static dataType = 'clickCounterModule'
    constructor() {
      super(clickCounterModule.dataType, 'Посчитать скорость кликов')
      this.bodyEl = document.querySelector('body')
      this.clickCount = 0
      this.isCounting = true;
      this.amountClics = document.createElement("p")
    }
  
    trigger() {
        this.bodyEl.style.background = generateRandomColor()
        this.amountClics.innerText = `Количество кликов: ${clickCount}`
        this.bodyEl.append(this.amountClics)
        this.body.addEventListener("click", counter)
        
        function counter(){
            if (isCounting) {
                clickCount++;
                amountClics.innerText = `Количество кликов: ${clickCount}`;
      }
    }
        setTimeout(() => {
            this.isCounting = false;
            alert(`Время вышло! Вы кликали со скоростью ' ${(this.clickCount/10)} кликов в секунду.`);
            this.amountClics.remove()
    }, 10000);
    }
}