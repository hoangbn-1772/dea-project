import './bootstrap';
import {fabric} from 'fabric';

function run() {
    let canvas = new fabric.Canvas('app');
    let rect = new fabric.Rect({
        left: 10,
        top: 10,
        fill: 'red',
        width: 200,
        height: 200
    });
    canvas.add(rect);
}

run();
