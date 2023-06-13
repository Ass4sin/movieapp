import React, { Component, Fragment } from 'react'
import styles from "./Test.module.scss"
import ToggleInfo from '../ToggleInfo'
import CounterState from "../../../src/CounterState/CounterState"

export default class Test extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isButtonActive: false
        }
    }

    toggleButton = () => {
        this.setState({ isButtonActive: !this.state.isButtonActive });
    }

    getButtonStyle = () => {
        return this.state.isButtonActive ? styles.buttonActive : styles.button;
    }

    render() {
        return (
            <Fragment> 
                <ToggleInfo isButtonActive = {this.state.isButtonActive}></ToggleInfo>
                <div className={this.getButtonStyle()} onClick={this.toggleButton}>Toggle</div>
                <CounterState isButtonActive = {this.state.isButtonActive} toggleButton = {this.toggleButton}></CounterState>
            </Fragment>
        )
    }
}
