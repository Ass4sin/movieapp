import React, { Component, Fragment } from 'react'
import styles from "./AppBody.module.scss"
import AppContext, { AppProvider } from '../../AppContext'
import Home from './Home/Home';
import Movies from './Movies/Movies';
import TVShows from './TVShows/TVShows';
import Reviews from './Reviews/Reviews';
import NewReleases from './NewReleases/NewReleases';

export default class AppBody extends Component {
  static contextType = AppContext;

  getActivePage = () => {
    switch (this.context.activeMenuTab) {
      case 1:
        return <Movies/>
      case 2:
        return <TVShows/>
      case 3:
        return <Reviews/>
      case 4:
        return <NewReleases/>
      default:
        return <Home/>
    }
  }

  render() {
    return (
      <div className={styles.appBody}>
        <AppProvider>
          {this.getActivePage()}
        </AppProvider>
      </div>
    )
  }
}
