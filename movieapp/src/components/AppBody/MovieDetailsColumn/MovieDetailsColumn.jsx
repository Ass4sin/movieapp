import React, { Fragment } from 'react'
import styles from "./MovieDetailsColumn.module.scss"

const MovieDetailsColumn = (props) => {
  return (
    <div className={styles.detailsColumn}>
        <div className={styles.bold}>{props.movie.title}</div>
        <div>{props.movie.description}</div>
        <strong>Genre</strong>
        <div className={styles.genreList}>
            {props.movie.genre.map((element,index) =>
            <div key={"MovieDetailsColumn" + index}>{element}</div>
            )}
            </div>
    </div>
  )
}

export default MovieDetailsColumn