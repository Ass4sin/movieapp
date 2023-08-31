import React, { Component} from 'react'
import styles from "./MainContainer.module.scss"
import Menu from '../Menu/Menu'
import AppBody from '../AppBody/AppBody'

export default class MainContainer extends Component {
    render() {
        return (
            <div className={styles.mainContainer}>
                <Menu></Menu>
                <AppBody></AppBody>
            </div>
        )
    }
}
