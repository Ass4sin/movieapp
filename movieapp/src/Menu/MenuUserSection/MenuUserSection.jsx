import React, { Component, Fragment } from 'react';
import { userdata } from '../../appdata/user';
import styles from "./MenuUserSection.module.scss";

export default class MenuUserSection extends Component {
    getUserWidgetStyle = () => {
        return this.props.isMenuOpen ? styles.userWidget : styles.userWidgetClosed;
    }

    render() {
        return (
            <div className={this.getUserWidgetStyle()}>
                <img src={userdata.profilePicture} className={styles.userPhoto}></img>
                <div className={styles.userName}>Hello <b>{userdata.username}</b></div>

            </div>
        )
    }
}
