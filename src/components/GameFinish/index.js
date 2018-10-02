import React, { Component } from 'react';
import { connect } from 'react-redux';
import sm from '../../SocketManager';
import './GameFinish.css';

class GameFinish extends Component {
    state = {
        isButtonActive: false
    }

    componentDidMount() {
        if(this.props.Game.gameStatus === 'choosing') {
            this.setState({
                isButtonActive: false
            })
        }
    }

    render() {
        return (
            <div className="GameFinish">
                <div className="GameFinish-Result">
                    {this.props.Game.winner === this.props.Game.yourID ? 'You WIN!' : 'You loose :('}
                </div>

                <div
                    className={'GameFinish-Repeat' + (this.state.isButtonActive ? ' active' : '')}
                    onClick={this.handleOnClick}
                >
                    Repeat!
                </div>

                {this.state.isButtonActive && <div className="GameFinish-ReadyMsg">Waiting opponent</div>}
            </div>
        )
    }

    handleOnClick = () => {
        const SocketManager = new sm();
        SocketManager.emitPlayerReady();

        this.setState({
            isButtonActive: true
        })
    }
}

function mapStateToProps(state) {
    return {
        Game: state.Game
    }
}


export default connect(mapStateToProps)(GameFinish);