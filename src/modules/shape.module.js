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
        const height = random(30, 600);
        const color = generateRandomColor();
        const borderTopLeftRadius = random(1, 80);
        const borderTopRighttRadius = random(0, 80);
        const borderBottomRighttRadius = random(0, 80);
        const borderBottomLeftRadius = random(0, 80);
        const left = random(0, 800);
        const right = random(0, 800);
        const top = random(0, 800);
        const bottom = random(0, 800);

        

        const randomShape = document.createElement('div');
        randomShape.className = 'random-shape';
        randomShape.style.width = `${width}px`;
        randomShape.style.height = `${height}px`;
        randomShape.style.backgroundColor = `${color}`;
        randomShape.style.borderTopLeftRadius = `${borderTopLeftRadius}%`;
        randomShape.style.borderTopRighttRadius = `${borderTopRighttRadius}%`;
        randomShape.style.borderBottomRighttRadius = `${borderBottomRighttRadius}%`;
        randomShape.style.borderBottomLeftRadius = `${borderBottomLeftRadius}%`;
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