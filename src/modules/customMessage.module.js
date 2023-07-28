import {Module} from '../core/module';
import {random} from '../utils';
import {messageArray} from '../constants';

export class CustomMessage extends Module {

    static dataType = 'customMessage'

    constructor(type){
        super(type, 'Показать сообщение')
        this.bodyEl = document.querySelector('body');
    }

    trigger(messageArray) {
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
        randomMessageBlock.style.display = 'none';
    }, 4000)
    }

}