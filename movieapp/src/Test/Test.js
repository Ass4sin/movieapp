import React, { Component } from 'react'
import styles from "./Test.module.scss"

export default class Test extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isButtonActive : false
        }
    }

    toggleButton = () => {
        this.setState({isButtonActive: !this.state.isButtonActive});
    }

    getButtonStyle = () => {
        return this.state.isButtonActive ? styles.buttonActive : styles.button;
    }

    render() {
        return (
            <div className={this.getButtonStyle()} onClick={this.toggleButton}>Test</div>
        )
    }
}
