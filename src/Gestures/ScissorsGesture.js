import Gesture from './Gesture';
import PaperGesture from './PaperGesture';
import LizardGesture from './LizardGesture';

export default class ScissorsGesture extends Gesture {
    constructor() {
        super();
        this.name = 'Scissors';
        this.id = 3;
    }

    createOverlayGestures() {
        this.subGestures = [{
            name: (new PaperGesture()).getName(),
            action: 'cuts'
        }, {
            name: (new LizardGesture()).getName(),
            action: 'decapitates'
        }];
    }
}