import React, { Component } from 'react'
import styles from "./MenuTabsSection.module.scss"

export default class MenuTabsSection extends Component {
  render() {
    return (
      <div className={styles.tabsContainer}>
        <div className={styles.darkblueCard}></div>
        <div className={styles.lightblueCard}></div>
        <div className={styles.darkorangeCard}></div>
        <div className={styles.lightyellowCard}></div>
        <div className={styles.lightredCard}></div>
      </div>
      
    )
  }
}
