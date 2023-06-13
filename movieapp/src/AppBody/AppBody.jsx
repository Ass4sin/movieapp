import React, { Component, Fragment } from 'react'
import MovieCards from './MovieCards/MovieCards'
import styles from "./AppBody.module.scss"

export default class AppBody extends Component {
  render() {
    return (
        <div className={styles.appBody}>
            <MovieCards></MovieCards>
        </div>
    )
  }
}
