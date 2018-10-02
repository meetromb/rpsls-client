import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './ScoreTable.css';

class ScoreTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anmiated: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                animated: true
            })
        }, 1)
    }

    render() {
        return (
            <Fragment>
                <div className={'Score-Left' + (this.state.animated ? ' animated' : '')}>
                    <div className="Score-Title">
                        You:
                    </div>
                    <div className="Score-Number">
                        {this.getYourScore()}
                    </div>
                </div>

                <div className={'Score-Right' + (this.state.animated ? ' animated' : '')}>
                    <div className="Score-Title">
                        Opponent:
                    </div>
                    <div className="Score-Number">
                        {this.getOpponentScore()}
                    </div>
                </div>
            </Fragment>
        )
    }

    getYourScore() {
        const { yourID, players } = this.props.Game;
        if (players) {
            const filteredPlayers = players.filter(player => {
                return player.id === yourID;
            });

            return filteredPlayers[0].score;
        }
    }

    getOpponentScore() {
        const { yourID, players } = this.props.Game;
        if (players) {
            const filteredPlayers = players.filter(player => {
                return player.id !== yourID;
            });

            return filteredPlayers[0].score;
        }
    }
}

function mapStateToProps(state) {
    return {
        Game: state.Game
    }
}

export default connect(mapStateToProps)(ScoreTable);