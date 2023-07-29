import {Module} from '../core/module';
import {random} from '../utils';


export class CustomMessage extends Module {

    static dataType = 'CustomMessage'

    constructor(type){
        super(type, 'CustomMessage')
        this.bodyEl = document.querySelector('body');
    }

    trigger(){

        const messageArray = ['Доступное такси для всех – наша миссия!', 'Мы делаем то, что работает на Вас!', 'Больше молока, меньше какао!', 'Мы решим Ваши проблемы', '"Бегемот".Починяем примусы. Недорого.'];

        const randomInd = random(0, messageArray.length - 1);
        const randomMess = messageArray[randomInd];

        const randomMessageBlock = document.createElement('div');
        this.bodyEl.append(randomMessageBlock);
    randomMessageBlock.className = 'random-message-block';
    const messageText = document.createElement('p');
    randomMessageBlock.append(messageText);
    messageText.className = 'message-text';
    messageText.textContent = `${randomMess}`;

    setTimeout(() => {
        randomMessageBlock.remove();
    }, 4000)
    }

}