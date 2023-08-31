import React, { Component } from 'react'
import styles from "./MenuTabsSection.module.scss"
import { menuTabs } from '../../../appdata/settings'
import AppContext from '../../../AppContext';

export default class MenuTabsSection extends Component {
  static contextType = AppContext;

  getActiveStyle = (index) => {
    return index === this.context.activeMenuTab ? styles.isActive : '';
  }

  render() {
    return (
      <div className={styles.tabsContainer}>

        {menuTabs.map((element, index) => 
            <div className={this.getActiveStyle(index)} onClick={() => this.context.setActiveMenuTab(index)} key={"MenuTab" + index}>
              {element}
            </div>
        )}

      </div>

    )
  }
}
