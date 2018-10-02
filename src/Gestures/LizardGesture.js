import Gesture from './Gesture';
import PaperGesture from './PaperGesture';
import SpockGesture from './SpockGesture';

export default class LizardGesture extends Gesture {
    constructor() {
        super();
        this.name = 'Lizard';
        this.id = 5;
    }

    createOverlayGestures() {
        this.subGestures = [{
            name: (new PaperGesture()).getName(),
            action: 'eats'
        }, {
            name: (new SpockGesture()).getName(),
            action: 'poisons'
        }];
    }
}