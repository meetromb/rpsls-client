import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GesturesSelector.css';
import RockCreator from '../../Gestures/Creators/RockCreator';
import PaperCreator from '../../Gestures/Creators/PaperCreator';
import ScissorsCreator from '../../Gestures/Creators/ScissorsCreator';
import SpockCreator from '../../Gestures/Creators/SpockCreator';
import LizardCreator from '../../Gestures/Creators/LizardCreator';


class GesturesSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countdown: 3
        }

        this.gestures = this.generateGestures();
    }

    componentDidUpdate() {
        if (this.props.Game.gameStatus === 'ready') {
            this.startTimer();
        }
    }

    render() {
        return (
            <div className="GesturesSelector">
                <div className="GesturesSelector-Title">
                    {this.props.Game.gameStatus === 'choosing' && 'Select a gesture:'}
                    {this.props.Game.gameStatus === 'waiting' && 'Waiting opponent'}
                    {this.props.Game.gameStatus === 'ready' && ('Game finishes in ' + this.state.countdown)}
                </div>

                <div className="GesturesSelector-List">
                    {this.renderGestures()}
                    {this.renderSeparator()}
                    {this.renderOpponentGesture()}
                </div>
            </div>
        )
    }

    renderGestures() {
        return (
            this.gestures.map(gesture => (
                <div
                    key={gesture.getName()}
                    className={'GesturesSelector-Item' + (this.getsureClassName(gesture.getID()))}
                >
                    {gesture.render()}
                </div>
            ))
        )
    }

    generateGestures() {
        return [
            new RockCreator().create(),
            new PaperCreator().create(),
            new ScissorsCreator().create(),
            new SpockCreator().create(),
            new LizardCreator().create()
        ]
    }

    renderSeparator() {
        const { players, yourID } = this.props.Game;
        if (players) {
            const gesture = players.filter(player => {
                return player.id === yourID;
            })[0].action;

            if (gesture > 0) {
                return (
                    <div className="GestureSelector-Separator">
                        <span>vs</span>
                    </div>
                )
            }
        }
    }

    renderOpponentGesture() {
        const { players, yourID } = this.props.Game;
        if (players) {
            const gesture = players.filter(player => {
                return player.id === yourID;
            })[0].action;

            const opponent = players.filter(player => {
                return player.id !== yourID;
            })[0];

            if (gesture > 0) {
                if (opponent.action > 0) {
                    const gestureFiltered = this.gestures.filter(item => {
                        return item.getID() === opponent.action;
                    })

                    return gestureFiltered[0].render();
                } else {
                    return (
                        <div className="UnknownGesture">
                            <span>?</span>
                        </div>
                    )
                }
            }
        }
    }

    getsureClassName(gestureID) {
        const { players, yourID } = this.props.Game;
        if (players) {
            const gesture = players.filter(player => {
                return player.id === yourID;
            })[0].action;

            if (gesture > 0) {
                if (gestureID !== gesture) {
                    return ' hidden';
                } else {
                    return ' active';
                }
            }
        }

        return '';
    }

    startTimer() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                if (this.state.countdown > 0) {
                    this.setState((prevState) => {
                        return {
                            countdown: prevState.countdown - 1
                        }
                    })
                } else {
                    this.stopTimer();
                }
            }, 1000);
        }
    }

    stopTimer() {
        clearInterval(this.timerId);
        this.timerId = null;
        this.setState({
            countdown: 3
        })
    }
}

function mapStateToProps(state) {
    return {
        Game: state.Game
    }
}

export default connect(mapStateToProps)(GesturesSelector);