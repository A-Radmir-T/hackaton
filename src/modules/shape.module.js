import {Module} from '../core/module';
import {random} from '../utils';
import { generateRandomColor } from '../utils';

export class ShapeModule extends Module {

    static dataType = 'shapeModule'

    constructor(){
        super(ShapeModule.dataType, 'Создать фигуру')
        this.bodyEl = document.querySelector('body')
    }

    trigger(){

        const width = random(20, 800);
        const heigth = random(30, 600);
        const color = generateRandomColor();

        const randomShape = document.createElement('div');
        this.bodyEl.append(randomShape);
        randomShape.className = 'random-shape';
        randomShape.style.width = `${width}px`;
        randomShape.style.heigth = `${heigth}px`;
        randomShape.style.backgroundColor = `${color}`;
        setTimeout(() => {
            randomShape.remove();
        }, 2000)


    }

}