import Gesture from './Gesture';
import LizardGesture from './LizardGesture';
import ScissorsGesture from './ScissorsGesture';

export default class RockGesture extends Gesture {
    constructor() {
        super();
        this.name = 'Rock';
        this.id = 1;
    }

    createOverlayGestures() {
        this.subGestures = [{
            name: (new LizardGesture()).getName(),
            action: 'crushes'
        }, {
            name: (new ScissorsGesture()).getName(),
            action: 'crushes'
        }];
    }
}