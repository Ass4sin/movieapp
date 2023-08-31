import React, { Component } from 'react'
import styles from "./MovieCards.module.scss"

export default class MovieCards extends Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <iframe
          className={styles.videoContainer} 
          src= {this.props.trailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        <div className={styles.trailerInfo}>
          {this.props.description}
        </div>
      </div>
    )
  }
}

