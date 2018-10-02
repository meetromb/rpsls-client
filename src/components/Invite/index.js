import React, { Component, Fragment } from 'react';
import './Invite.css';

export default class Invite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            link: window.location.href
        }
    }

    render() {
        return (
            <Fragment>
                <div className="Invite-Title">
                    Invite a friend to start a <span>game!</span>
                </div>

                <input
                    className="Invite-Input"
                    type="text"
                    value={this.state.link}
                    onChange={this.handleOnChange}
                    onClick={this.handleOnClick}
                />

                <div className="Invite-Subtitle">
                    ...or create your's link!
                </div>
            </Fragment>
        )
    }

    handleOnChange = (e) => {
        this.setState({
            link: e.target.value.trim()
        })
    }

    handleOnClick = (e) => {
        e.target.select();
        document.execCommand("copy");
    }
}