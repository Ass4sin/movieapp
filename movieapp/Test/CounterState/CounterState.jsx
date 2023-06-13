import React, { Component } from 'react'
import styles from "../Test/Test.module.scss"
import style from "./CounterState.module.scss"

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counterStart : 0
        }
    }

    componentDidUpdate(prevProps){
        this.props.isButtonActive !== prevProps.isButtonActive && 
            this.setState({counterStart : this.state.counterStart + 1})
    }

    toggleParent = () =>{
        this.props.toggleButton()
    }

    render() {
        return (
            <div className={`${styles.button} ${style.counterContainer}`} onClick={this.toggleParent}>{this.state.counterStart}</div>
        )
    }
}
