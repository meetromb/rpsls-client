import React from 'react';
import store from '../store/config';
import { selectGesture } from '../store/actions/game_actions';

export default class Gesture {
    constructor() {
        this.name = '';
        this.action = '';
        this.id = 0;
        this.subGestures = [];
    }

    createOverlayGestures() {
        this.subGestures = [];
    }

    render() {
        return (
            <div
                className={'Gesture Gesture_Type' + this.id}
                onClick={this.handleOnClick.bind(this)}
            >
                <div className="Gesture-Description">
                    <h3>{this.name}</h3>
                    <ul>
                        {this.subGestures.map(gesture => (
                            <li key={gesture.name}>{gesture.action + ' ' + gesture.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    handleOnClick = () => {
        const audio = new Audio('./assets/gesture_select.mp3');
        audio.volume = 0.25;
        audio.play();
        store.dispatch(selectGesture(this.id));
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }
}