import Gesture from './Gesture';
import RockGesture from './RockGesture';
import SpockGesture from './SpockGesture';

export default class PaperGesture extends Gesture {
    constructor() {
        super();
        this.name = 'Paper';
        this.id = 2;
    }

    createOverlayGestures() {
        this.subGestures = [{
            name: (new RockGesture()).getName(),
            action: 'covers'
        }, {
            name: (new SpockGesture()).getName(),
            action: 'disproves'
        }];
    }
}