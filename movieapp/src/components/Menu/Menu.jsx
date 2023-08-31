import React, { Component, Fragment } from 'react'
import styles from "./Menu.module.scss"
import dropdown from "../../assets/dropdown.svg"
import MenuUserSection from './MenuUserSection/MenuUserSection'
import MenuTabsSection from './MenuTabsSection/MenuTabsSection'

export default class Menu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isMenuOpen: true,      
    }
  }

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  getMenuStyle = () => {
    return this.state.isMenuOpen ? styles.menu : styles.menuClosed;
  }

  render() {
    return (
      <div className={styles.menuContainer}>
        <div className={this.getMenuStyle()}>
          <MenuUserSection isMenuOpen={this.state.isMenuOpen}/>
          {this.state.isMenuOpen && <MenuTabsSection/>}
        </div>
        
        <div className={styles.toggleButton} onClick={this.toggleMenu}>
          <img src={dropdown} className={styles.dropdown}></img>
        </div>
      </div>
    )
  }
}
