import styles from "./MovieContainer.module.scss"
import { moviePoster } from '../../../appdata/movies'
import React, { Component } from 'react'
import PosterOverlay from '../PosterOverlay/PosterOverlay'
import AppContext from "../../../AppContext";
import MovieInfo from "../MovieInfo/MovieInfo";

export default class MovieContainer extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  getMoviesContainerStyle = () => {
    return this.context.isMovieViewActive ?
      styles.moviesContainerDetailedView :
      styles.moviesContainer
  }

  getPosterContainerStyle = () => {
    return this.context.isMovieViewActive ?
      styles.posterContainerDetailedView :
      styles.posterContainer
  }

  render() {
    return (
      <div className={this.getMoviesContainerStyle()}>
        {
          moviePoster.map((element, index) =>
            <div key={"MovieContainer" + index} className={this.getPosterContainerStyle()}>
              <div style={{ backgroundImage: "url(" + moviePoster[index].posterUrl + ")" }}
                key={"moviePoster" + index}
                className={styles.movieImage}
              />

              <MovieInfo
                index={index}
                element={element} />
            </div>
          )
        }
      </div>
    )
  }
}
