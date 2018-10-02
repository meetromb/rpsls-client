import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-Title Big">Rock Paper Scissors Spock Lizard</div>
                <div className="Header-Title Small">RPSSL</div>
                <div className="Header-Subtitle">1x1 GAME</div>
            </div >
        );
    }
}