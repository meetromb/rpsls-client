import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { disablePopup } from '../../store/actions/popups_actions';
import './HelpScreen.css';

class HelpScreen extends Component {
    render() {
        return (
            <div className={'HelpScreen' + (this.props.Popups.isPopupEnabled ? ' active' : '')}>
                <div className="HelpScreen-Title">
                    How to play
                </div>

                <div className="HelpScreen-Description">
                    <div className="HelpScreen-Block">
                        <h3>What is it?</h3>
                        <p>Play rock paper scissors lizard spock with a friend or enemy live over the web to break a tie, resolve a ‘debate’, or kill time before Game of Thrones comes on.</p>
                    </div>
                    <div className="HelpScreen-Block">
                        <h3>How to play</h3>
                        <ol>
                            <li>Send the link above to your frenemy.</li>
                            <li>Wait here for them to show up.</li>
                            <li>The game begins automatically when your friend arrives.</li>
                        </ol>
                    </div>
                </div>

                <div className="HelpScreen-Close" onClick={this.handleOnClose}>
                    <span>+</span>
                </div>
            </div>
        )
    }

    handleOnClose = () => {
        this.props.disablePopup();
    }
}

function mapStateToProps(state) {
    return {
        Popups: state.Popups
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ disablePopup }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpScreen);