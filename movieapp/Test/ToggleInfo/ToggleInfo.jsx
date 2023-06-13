import React, { Component } from 'react'

export default class ToggleInfo extends Component {
    buttonState = () => {
        return this.props.isButtonActive ? "on" : "off";
    }

    render() {
        return (
            <div>Toggle is {this.buttonState()}</div>
        )
    }
}
