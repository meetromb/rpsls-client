import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import ScoreTable from './ScoreTable';
import HelpButton from './Help/HelpButton';
import HelpScreen from './Help/HelpScreen';
import Invite from './Invite';
import GesturesSelector from './GesturesSelector';
import GameFinish from './GameFinish';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={'App-Container' + (this.props.Popups.isPopupEnabled ? ' blurred' : '')}>
          <Header />

          {this.props.Game.players !== null &&
            <div className="App-ScoreTable">
              <ScoreTable />
            </div>
          }

          <div className={'App-InviteGroup' + (this.props.Game.gameStatus !== 'searching' ? ' animated' : '')}>
            <Invite />
          </div>

          <div className={
              'App-Gestures' +
              ((this.props.Game.gameStatus !== 'searching' && this.props.Game.gameStatus !== 'finish')
                ? ' animated'
                : ''
              )}
          >
            <GesturesSelector />
          </div>

          <div className={'App-Finish' + (this.props.Game.gameStatus === 'finish' ? ' animated' : '')}>
            {this.props.Game.gameStatus === 'finish' && <GameFinish />}
          </div>

          <div className={'App-GameStatus' + (this.props.Game.gameStatus !== 'searching' ? ' animated' : '')}>
            {this.props.Game.gameStatus === 'searching'
              ? <span>Waiting for opponent</span>
              : <span>Let's ROLL!</span>
            }
          </div>

          <div className="App-HelpButton">
            <HelpButton />
          </div>
        </div>

        <div className="App-Popups">
          <HelpScreen />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Popups: state.Popups,
    Game: state.Game
  }
}

export default connect(mapStateToProps)(App);
