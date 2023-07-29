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

        const width = random(20, 500);
        const height = random(30, 500);
        const color = generateRandomColor();
        const borderRadius = random(1, 50);
        const left = random(0, 600);
        const right = random(0, 600);
        const top = random(0, 600);
        const bottom = random(0, 600);

        

        const randomShape = document.createElement('div');
        randomShape.className = 'random-shape';
        randomShape.style.width = `${width}px`;
        randomShape.style.height = `${height}px`;
        randomShape.style.backgroundColor = `${color}`;
        randomShape.style.borderRadius = `${borderRadius}%`;
        randomShape.style.left = `${left}px`;
        randomShape.style.right = `${right}px`;
        randomShape.style.top = `${top}px`;
        randomShape.style.bottom = `${bottom}px`;

        this.bodyEl.append(randomShape);
        setTimeout(() => {
            randomShape.remove();
        }, 2000)


    }

}