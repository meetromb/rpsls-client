import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enablePopup } from '../../store/actions/popups_actions';
import './HelpButton.css';

class HelpButton extends Component {
    render() {
        return (
            <div
                className="HelpButton"
                onClick={this.handleOnClick}
            >
                <span>?</span>
            </div>
        )
    }

    handleOnClick = (e) => {
        this.props.enablePopup('help');
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ enablePopup }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(HelpButton);