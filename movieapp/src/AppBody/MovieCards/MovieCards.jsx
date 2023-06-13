import React, { Component } from 'react'
import styles from "./MovieCards.module.scss"

export default class MovieCards extends Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <iframe src="https://www.youtube.com/embed/Bl4qzIrt7A8"
        className={styles.videoContainer} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
      </div>
    )
  }
}
