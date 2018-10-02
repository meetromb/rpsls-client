import Gesture from './Gesture';
import ScissorsGesture from './ScissorsGesture';
import RockGesture from './RockGesture';

export default class SpockGesture extends Gesture {
    constructor() {
        super();
        this.name = 'Spock';
        this.id = 4;
    }

    createOverlayGestures() {
        this.subGestures = [{
            name: (new ScissorsGesture()).getName(),
            action: 'smashes'
        }, {
            name: (new RockGesture()).getName(),
            action: 'vaporizes'
        }];
    }
}